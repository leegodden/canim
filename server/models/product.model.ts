import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
import {
	IProduct,
	IThumbnail,
	IGalleryImage,
	IFeature,
	ICampaign,
} from '../types/types';

const productSchema = new mongoose.Schema<IProduct>(
	{
		title: {
			type: String,
			required: [true, 'Please, provide a product title'],
			trim: true,
			unique: true,
			maxLength: [100, 'Your title would be at most 100 characters'],
		},
		summary: {
			type: String,
			required: [true, 'Please, provide product summary'],
			trim: true,
			maxLength: [500, 'Your summary must be no more than 500 characters'],
		},
		thumbnail: {
			url: {
				type: String,
				validate: [validator.isURL, 'Please provide a valid thumbnail URL'],
				default: 'https://placehold.co/296x200.png',
			},
			public_id: {
				type: String,
				default: 'N/A',
			},
		},

		// gallery
		gallery: {
			type: [
				{
					url: {
						type: String,
						default: 'https://placehold.co/296x200.png',
						validate: [validator.isURL, 'Please provide a valid gallery photo URL'],
					},
					public_id: {
						type: String,
						default: 'N/A',
					},
				},
			],
			validate: {
				// value should be an array of objects - returns false if value > 5
				validator: function (value: IGalleryImage[]): boolean {
					return value.length <= 5;
				},
				message: 'Cannot add more than 5 images to the gallery',
			},
		},

		// features
		features: [
			{
				title: {
					type: String,
					required: [true, 'Please provide a feature title'],
					maxLength: [100, 'Your title would be at most 100 characters'],
				},
				content: {
					type: [String],
					required: [true, 'Please provide feature content'],
					maxLength: [200, 'Your content would be at most 200 characters'],
				},
			},
		],

		variations: {
			colors: { type: [String] },
			sizes: { type: [String] },
		},
		campaign: {
			title: {
				type: String,
				required: [true, 'Please provide a campaign title'],
			},
			state: {
				type: String,
				required: [true, 'Please provide a campaign state'],
				enum: ['new-arrival', 'discount', 'sold-out', 'on-sale'],
			},
		},
		price: {
			type: Number,
			required: [true, 'Please provide a product price'],
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},
		brand: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Brand',
		},
		store: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Store',
		},
		buyers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		reviews: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Review',
			},
		],
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

// Create the Product model with TypeScript types
const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
