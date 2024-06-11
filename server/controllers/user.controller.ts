import * as userService from '../services/user.service';
import { NextFunction, Request, Response } from 'express';

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await userService.signUp(req, res);
	} catch (error) {
		next(error);
	} finally {
		console.log(`Route: ${req.url} || Method: ${req.method}`);
	}
};
