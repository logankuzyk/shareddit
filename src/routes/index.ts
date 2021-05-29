import { Router } from 'express';
import { getSharedditImage } from './Shareddit';

const sharedditRouter = Router();

// Export the base-router
const baseRouter = Router();
// baseRouter.use("*", sharedditRouter);

export default baseRouter;
