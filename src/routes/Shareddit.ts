import { Request, Response } from 'express';
import queryString from 'query-string';

import getRedditData from '../business/getRedditData';
import { SkeletonRedditSubmission } from 'src/business/types';
import { ParamsDictionary } from 'express-serve-static-core';

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
    const query = req.path.substr(1, req.path.length);
    const params = queryString.parse(query);
    const generationParams: SkeletonRedditSubmission = await validateParams(
      params
    );

    const sharedditSkeleton = await getRedditData(generationParams);
    return res.send(sharedditSkeleton);
  } catch (err) {
    console.error(err);
    return res.status(500).send();
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
    return res.status(500).send();
  }
};
