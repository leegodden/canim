import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
import { IStore } from '../types/types';

const storeSchema = new mongoose.Schema<IStore>(
	{
		title: {
			type: String,
			required: [true, 'Please, provide a valid store name'],
			trim: true,
			unique: true,
			maxLength: [100, 'Your title would be at most 100 characters'],
		},
		description: {
			type: String,
			required: [true, 'Please, provide store description'],
			trim: true,
			maxLength: [500, 'Your description would be at most 500 characters'],
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
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		products: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product',
			},
		],
		status: {
			type: String,
			enum: {
				values: ['active', 'inactive'],
				message: 'Invalid status, choose active/inactive',
			},
			default: 'active',
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

// Middleware for transforming tags before saving
storeSchema.pre<IStore>('save', function (next) {
	this.tags = this.tags.map((tag) => tag.replace(' ', '-').toLowerCase());
	next();
});

const Store = mongoose.model<IStore>('Store', storeSchema);

export default Store;
