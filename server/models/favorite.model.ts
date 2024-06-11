import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
import { IFavorite } from '../types/types';

const favoriteSchema = new mongoose.Schema<IFavorite>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},

		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},

		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

// Create favorite model
const Favorite = mongoose.model<IFavorite>('Favorite', favoriteSchema);

// Export favorite model using ES6 syntax
export default Favorite;
