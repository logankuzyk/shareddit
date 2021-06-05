import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import queryString from 'query-string';

import renderImage from '../business/renderImage';
import {
  FleshedRedditSubmission,
  SkeletonRedditSubmission,
} from 'src/business/types';
import { ParamsDictionary } from 'express-serve-static-core';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

const validateParams = async (
  params: ParamsDictionary | queryString.ParsedQuery<any>
): Promise<SkeletonRedditSubmission> => {
  const output: SkeletonRedditSubmission = {
    sub: params.sub,
    postID: params.postID,
    urlTitle: params.title ? params.title : undefined,
    commentID: params.commentID ? params.commentID : undefined,
    redact: params.redact ? true : false,
  };

  return output;
};

export const parseQueryString = async (req: Request, res: Response) => {
  try {
    const query = req.path;
    const params = queryString.parse(query);
    const generationParams: SkeletonRedditSubmission = await validateParams(
      params
    );

    const imageElement = await renderImage(generationParams);
    return res.send(imageElement);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
};

export const redirectRedditPath = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const generationParams: SkeletonRedditSubmission = await validateParams(
      params
    );

    const query = queryString.stringify(params, { skipNull: true });

    return res.redirect(`/${query}`);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
};
