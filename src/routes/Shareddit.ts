import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

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

    return res.status(OK).json(params);
}
