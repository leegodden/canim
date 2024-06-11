import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const verify = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// Catch the token from user header
		const token = req.headers?.authorization?.split(' ')[1];

		// No token explicitly give error
		if (!token) {
			return res.status(401).json({
				acknowledgement: false,
				message: 'Unauthorized',
				description: 'No token found to persist an existing user for long time',
			});
		}

		// Fetching token and setting the user on request
		const decoded = await new Promise((resolve, reject) => {
			jwt.verify(token, process.env.TOKEN_SECRET as string, (err, decodedToken) => {
				if (err) {
					reject(err);
				} else {
					resolve(decodedToken);
				}
			});
		});

		req.user = decoded;

		next();
	} catch (error) {
		res.status(401).json({
			acknowledgement: false,
			message: 'Unauthorized',
			description: 'Sign in your account to continue',
		});
	}
};

/* export token verification */
export default verify;
