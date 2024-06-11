import { Request, Response } from 'express';

import Brand from '../models/brand.model';
import Cart from '../models/cart.model';
import Category from '../models/category.model';
import Favorite from '../models/favorite.model';
import Product from '../models/product.model';
import Purchase from '../models/purchase.model';
import Review from '../models/review.model';
import Store from '../models/store.model';
import User from '../models/user.model';

import { SignUpRequest } from '../types/types';

// Sign up user
export const signUp = async (req: SignUpRequest, res: Response) => {
	const { body, file } = req;

	// Create new user instance
	const user = new User({
		name: body.name,
		email: body.email,
		password: body.password,
		phone: body.phone,
	});

	// Handle file upload for the avatar i exits
	if (file) {
		user.avatar = {
			url: file.path,
			public_id: file.filename,
		};
	}

	// Save new user to the db
	await user.save();

	// Responding with status 201 and a JSON object
	res.status(201).json({
		acknowledgment: true,
		message: 'Crewated',
		description: 'user created successfully',
	});

	return user;
};
