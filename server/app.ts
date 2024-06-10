import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Create an Express application
const app = express();

app.use(
	cors({
		origin: process.env.ORIGIN_URL,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

// Health Check Route
app.get('/healthcheck', (req, res) => {
	res.status(200).send('Health check successful');
});

export default app;
