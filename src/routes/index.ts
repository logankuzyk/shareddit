import { Router } from 'express';
import { getSharedditImage } from './Shareddit';

const sharedditRouter = Router();
sharedditRouter.get('/r/:sub/comments/:postID', getSharedditImage);
sharedditRouter.get(
  '/r/:sub/comments/:postID/:title/:commentID',
  getSharedditImage
);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/', sharedditRouter);

export default baseRouter;
