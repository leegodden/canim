import app from './app'; // Import the app with the healthcheck route
import mongoose from 'mongoose';
import { config } from 'dotenv';
import { successMessage, warningMessage, errorMessage } from './utils/console.util';

config();
const port = process.env.PORT || 3000;

mongoose
	.connect(process.env.ATLAS_URI as string, {})
	.then(() => successMessage('Connected to MongoDB'))
	.catch((error) => errorMessage(`MongoDB connection error: ${error}`));

app.listen(port, () => {
	successMessage(`Server is running on port:${port}`);
});
