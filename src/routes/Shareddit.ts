import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import renderImage from '../business/renderImage'

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get generated image.
 * 
 * @param req 
 * @param res 
 * @returns
 */
export async function getSharedditImage(req: Request, res: Response) {
    const { params } = req;

    const url = await renderImage(params);

    return res.status(OK).json({ image: url });
}
