import { Router } from 'express';
import { redirectRedditPath, parseQueryString } from './Shareddit';

const sharedditRouter = Router();

sharedditRouter.get('/r/:sub/comments/:postID/(:title)?', redirectRedditPath);
sharedditRouter.get(
  '/r/:sub/comments/:postID/:title/:commentID',
  redirectRedditPath
);

sharedditRouter.get('/*', parseQueryString);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/', sharedditRouter);

export default baseRouter;
