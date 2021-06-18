import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';

import app from '@server';
import { pErr } from '@shared/functions';
import { paramMissingError } from '@shared/constants';
import { SharedditResponse } from '../support/types';

describe('Valid Reddit Queries', () => {
  const postID = '/postID=bix2vk&sub=erasers';
  const postIDWithTitle = `${postID}&title=retiring_my_old_tombow_to_my_backup_eraser_new_vs/`;

  const commentID = `${postIDWithTitle}&commentID=em3qaeg`;

  const selfPost =
    '/postID=7s7e9z&sub=garlicoin&title=beginners_guide_to_mine_on_raspberry_pi_and_to';

  const eightComments =
    '/r/bottestingcirrus/comments/hudsxu/launch_imminent/fyu9rns/';
  const nineComments =
    '/r/askscience/comments/nzh4j0/the_earth_is_about_45_billion_years_old_and_the/';

  const { BAD_REQUEST, CREATED, OK } = StatusCodes;
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe(`"GET:${postID}"`, () => {
    it('Testing post ID endpoint.', (done) => {
      agent.get(postID).end((err: Error, res: SharedditResponse) => {
        pErr(err);

        const data = res.body;

        expect(res.status).toBe(OK);
        expect(data.score).toBeInstanceOf(String);
        expect(data.author).toBe('C1RRU5');
        expect(data.link).toBe('https://i.imgur.com/woQukdN.jpg');
        expect(data.commentsCount).toBeInstanceOf(Number);
        expect(data.awards).toBeInstanceOf(Array);
        expect(data.bodyHTML).toBeNull();
        expect(data.type).toBe('image');
        expect(data.postID).toBe('bix2vk');
        expect(data.redact).toBeFalse();
        done();
      });
    });
  });

  describe(`GET:${postIDWithTitle}`, () => {
    it('Testing post ID with title endpoint.', (done) => {
      agent.get(postIDWithTitle).end((err: Error, res: SharedditResponse) => {
        pErr(err);

        const data = res.body;

        expect(res.status).toBe(OK);
        expect(data.score).toBeInstanceOf(String);
        expect(data.author).toBe('C1RRU5');
        expect(data.link).toBe('https://i.imgur.com/woQukdN.jpg');
        expect(data.commentsCount).toBeInstanceOf(Number);
        expect(data.awards).toBeInstanceOf(Array);
        expect(data.bodyHTML).toBeNull();
        expect(data.type).toBe('image');
        expect(data.postID).toBe('bix2vk');
        expect(data.redact).toBeFalse();
        done();
      });
    });
  });

  describe(`GET:${commentID}`, () => {
    it('Testing comment ID endpoint.', (done) => {
      agent.get(commentID).end((err: Error, res: SharedditResponse) => {
        pErr(err);

        const data = res.body;

        expect(res.status).toBe(OK);
        expect(data.score).toBeInstanceOf(String);
        expect(data.author).toBe('C1RRU5');
        expect(data.link).toBe('https://i.imgur.com/woQukdN.jpg');
        expect(data.commentsCount).toBeInstanceOf(Number);
        expect(data.awards).toBeInstanceOf(Array);
        expect(data.bodyHTML).toBeNull();
        expect(data.type).toBe('image');
        expect(data.postID).toBe('bix2vk');
        expect(data.redact).toBeFalse();

        const comment = data.comments[0];

        expect(data.comments.length).toBe(1);
        expect(comment.score).toBeInstanceOf(String);
        expect(comment.author).toBe('C1RRU5');
        expect(comment.bodyHTML).toBeInstanceOf(String);
        expect(comment.prettyDate).toBeInstanceOf(String);
        expect(comment.parentID).toBe('t3_bix2vk');
        expect(comment.awards).toBeInstanceOf(Array);

        done();
      });
    });
  });

  describe(`GET:${selfPost}`, () => {
    it('Testing with a self post.', (done) => {
      agent.get(selfPost).end((err: Error, res: SharedditResponse) => {
        pErr(err);

        const data = res.body;

        expect(res.status).toBe(OK);
        expect(data.score).toBeInstanceOf(String);
        expect(data.author).toBe('C1RRU5');
        expect(data.link).toBe(
          'https://www.reddit.com/r/garlicoin/comments/7s7e9z/beginners_guide_to_mine_on_raspberry_pi_and_to/'
        );
        expect(data.commentsCount).toBeInstanceOf(Number);
        expect(data.awards).toBeInstanceOf(Array);
        expect(data.bodyHTML).toBeInstanceOf(String);
        expect(data.type).toBe('text');
        expect(data.sub).toBe('garlicoin');
        expect(data.postID).toBe('7s7e9z');
        expect(data.redact).toBeFalse();

        done();
      });
    });
  });
});
