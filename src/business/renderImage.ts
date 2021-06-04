import { FleshedRedditSubmission, SkeletonRedditSubmission } from './types';
import getRedditData from './getRedditData';
import makeImage from './makeImage';

export default async (params: SkeletonRedditSubmission) => {
  const redditData: FleshedRedditSubmission = await getRedditData(params);
  const url = makeImage(redditData);
  return url;
};
