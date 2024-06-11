import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
import { ICategory } from '../types/types';
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema<ICategory>(
	{
		title: {
			type: String,
			required: [true, 'Please, provide a category name'],
			trim: true,
			unique: true,
			maxLength: [100, 'Your title would be at most 100 characters'],
		},

		description: {
			type: String,
			required: [true, 'Please, provide category description'],
			trim: true,
			maxLength: [500, 'Your description would be at most 500 characters'],
		},

		thumbnail: {
			url: {
				type: String,
				validate: {
					validator: validator.isURL,
					message: 'Please provide a valid thumbnail URL',
				},
				default: 'https://placehold.co/296x200.png',
			},
			public_id: {
				type: String,
				default: 'N/A',
			},
		},

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

		products: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Product',
			},
		],

		creator: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User',
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

// Middleware for category
categorySchema.pre<ICategory>('save', function (next) {
	// Check if `title` is present and split into words.
	if (this.title) {
		let splitStr = this.title.toLowerCase().split(' ');

		// Capitalize first letter of each word in the string
		for (let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}

		// Join the words back together to form capitalized titles
		this.title = splitStr.join(' ');
	}

	// Process `tags` to replacing spaces with hyphens and convert to lowercase
	// for a consistent, URL-friendly format
	this.tags = this.tags.map((tag) => tag.replace(' ', '-').toLowerCase());

	next();
});

// Create category model
const Category = mongoose.model<ICategory>('Category', categorySchema);

// Export category model
export default Category;
