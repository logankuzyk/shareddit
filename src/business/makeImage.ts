import fs from 'fs';
import handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import uniqolor from 'uniqolor';

import render from './render';
import { imgurUpload } from './util';
import {
  Award,
  AwardParams,
  FleshedRedditSubmission,
  TitleRenderParams,
} from './types';

const dotenv = require('dotenv').config();

const redact = (user: string): { text: string; color: string } => {
  const block = '&#9608&#9608&#9608&#9608&#9608&#9608&#9608&#9608&#9608&#9608';

  return { text: block, color: uniqolor(user).color };
};

const buildAwards = (all_awardings: Award[]) => {
  //TODO: make sure small icons are the ones being used
  let output = '';
  // all_awardings is not iterable
  // console.log(all_awardings);
  // for (let award of all_awardings) {
  //   let params: AwardParams = {
  //     //Should be 48x48 icon
  //     //@ts-ignore
  //     imageSrc: award.resized_static_icons[2].url,
  //   };
  //   if (award.count > 1) params.awardCount = award.count;
  //   output += render.award(params);
  // }
  return output;
};

// Uses handlebars to generate the comment HTML and returns [the source].
const generateHTML = async (data: FleshedRedditSubmission) => {
  let titleHTML: string = '';
  let selfTextHTML: string = '';
  let commentHTML: string = '';
  //yes, yes
  console.log(data.awards[0]);
  const titleParams: TitleRenderParams = {
    score: data.score,
    link: data.link,
    submissionTitle: data.title,
    time: data.prettyDate,
    commentsCount: data.commentsCount,
    sub: data.sub,
    text: data.bodyHTML ? data.bodyHTML : undefined,
    awards: buildAwards(data.awards),
    author: data.redact ? redact(data.author).text : data.author,
    redact: data.redact,
  };
  // No comments, simply return image and title.
  if (data.comments) {
    for (let comment of data.comments) {
      const commentParams = {
        author: data.redact ? redact(comment.author).text : comment.author,
        commentHTML: comment.bodyHTML,
        score: comment.score,
        time: comment.prettyDate,
        child: commentHTML,
        awards: buildAwards(comment.awards),
      };
      commentHTML = render.comment(commentParams);
    }
  }
  switch (data.type) {
    case 'image':
      titleHTML = render.imageSubmission(titleParams);
    case 'text':
      titleParams.link = `self.${titleParams.sub}`;
      titleHTML = render.textSubmission(titleParams);
    case 'link':
      titleHTML = render.imageSubmission(titleParams);
    case 'image':
      titleHTML = render.imageSubmission(titleParams);
  }

  return render.everything({ submission: titleHTML, comments: commentHTML });
};

// Renders HTML with puppeteer and takes a screenshot, saving it to the cache folder.
const generateImage = async (html: string) => {
  const browser = await puppeteer.launch({
    defaultViewport: null,
    userDataDir: __dirname + '/../chrome_data',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1920,
    deviceScaleFactor: 2,
  });
  await page.setContent(html);
  const inputElement = await page.$('#content');
  let buffer: any;
  if (inputElement) {
    buffer = await inputElement.screenshot({
      encoding: 'base64',
    });
  }

  await browser.close();

  return buffer;
};

export default async (data: FleshedRedditSubmission): Promise<string> => {
  const source = await generateHTML(data);
  const image = await generateImage(source);
  const url = await imgurUpload(image);
  console.log(url);
  return url;
};
