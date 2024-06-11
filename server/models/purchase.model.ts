import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
import { PurchaseStatus, IProductSubdocument, IPurchase } from '../types/types';

const purchaseSchema = new mongoose.Schema<IPurchase>(
	{
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		products: [
			new mongoose.Schema<IProductSubdocument>({
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Product',
				},
				quantity: {
					type: Number,
					default: 1,
				},
			}),
		],
		customerId: {
			type: String,
			required: true,
		},
		orderId: {
			type: String,
			required: true,
		},
		totalAmount: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: PurchaseStatus,
			default: 'pending',
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

const Purchase = mongoose.model<IPurchase>('Purchase', purchaseSchema);

export default Purchase;
