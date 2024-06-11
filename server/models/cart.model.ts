import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
import { ICart } from '../types/types';

const cartSchema: Schema = new mongoose.Schema(
	{
		product: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Product',
		},

		user: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User',
		},

		quantity: {
			type: Number,
			default: 1,
		},

		createdAt: {
			type: Date,
			default: () => Date.now(),
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

// Create cart model
const Cart = mongoose.model<ICart>('Cart', cartSchema);

export default Cart;
