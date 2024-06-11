import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
import { IReview } from '../types/types';

const reviewSchema = new Schema<IReview>(
	{
		reviewer: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		product: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
		rating: {
			type: Number,
			required: [true, 'Please, provide a rating'],
			min: 1,
			max: 5,
		},
		comment: {
			type: String,
			required: [true, 'Please, provide a comment'],
			maxLength: [200, 'Your comment should be at most 200 characters'],
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

const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review;
