import { Router } from 'express';
import { getSharedditImage, parseQueryString } from './Shareddit';

const sharedditRouter = Router();

sharedditRouter.get('/r/:sub/comments/:postID/(:title)?', getSharedditImage);
sharedditRouter.get(
  '/r/:sub/comments/:postID/:title/:commentID',
  getSharedditImage
);

sharedditRouter.get('/*', parseQueryString);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/', sharedditRouter);

export default baseRouter;
