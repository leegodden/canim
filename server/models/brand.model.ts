import mongoose, { Schema, Document } from 'mongoose';
import { BrandDocument } from '../types/types';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = new Schema<BrandDocument>(
	{
		title: {
			type: String,
			required: [true, 'Please, provide a valid brand name'],
			trim: true,
			uppercase: true,
			unique: true,
			maxLength: [100, 'Your title would be at most 100 characters'],
		},
		description: {
			type: String,
			required: [true, 'Please, provide brand description'],
			trim: true,
			maxLength: [500, 'Your description would be at most 500 characters'],
		},
		logo: {
			url: {
				type: String,
				validate: [validator.isURL, 'Please provide a valid logo URL'],
				default: 'https://placehold.co/296x200.png',
			},
			public_id: {
				type: String,
				default: 'N/A',
			},
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Product',
			},
		],
		keynotes: [
			{
				type: String,
				trim: true,
			},
		],
		tags: [
			{
				type: String,
				trim: true,
			},
		],
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

// Middleware to format title and tags
brandSchema.pre<BrandDocument>('save', function (next) {
	// Capitalize first letter in each word of the title
	this.title = this.title
		.split(' ')
		.map(
			(word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		)
		.join(' ');

	// Format tags: replace spaces with hyphens and lowercase
	this.tags = this.tags.map((tag) => tag.replace(/\s+/g, '-').toLowerCase());

	next();
});

const Brand = mongoose.model<BrandDocument>('Brand', brandSchema);

export default Brand;
