import app from './app'; // Import the app with the healthcheck route
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
const port = process.env.PORT || 3000;

mongoose
	.connect(process.env.ATLAS_URI as string, {})
	.then(() => console.log('Connected to Mongo'))
	.catch((error) => console.log('MongoDB connection error:', error));

app.listen(port, () => {
	console.log(`Server is running on port:${port}`);
});
