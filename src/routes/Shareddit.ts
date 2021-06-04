import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import renderImage from '../business/renderImage';
import {
  FleshedRedditSubmission,
  SkeletonRedditSubmission,
} from 'src/business/types';
import { ParamsDictionary } from 'express-serve-static-core';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

const validateParams = async (
  params: ParamsDictionary
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

export const getSharedditImage = async (req: Request, res: Response) => {
  const { params } = req;
  const generationParams: SkeletonRedditSubmission = await validateParams(
    params
  );
  const imageURL = await renderImage(generationParams);

  return res.status(OK).json({ image: imageURL });
};
