import jwt from 'jsonwebtoken';
import { UserData } from '../types/types';

// Generate token
function token(userData: UserData): string {
	// Get specific user info to generate JWT token
	const accessToken = jwt.sign(
		{
			_id: userData._id,
			name: userData.name,
			email: userData.email,
			role: userData.role,
			status: userData.status,
		},
		process.env.TOKEN_SECRET as string,
		{ expiresIn: '2h' }
	);

	return accessToken;
}
export default token;
