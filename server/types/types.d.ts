import 'colors';
import mongoose, { Schema, Document } from 'mongoose';
import { Request } from 'express';

// Module augmentation for Express
declare module 'express-serve-static-core' {
	// Extend the existing interface of 'Request'
	interface Request {
		user?: any;
	}
}

declare module 'colors' {
	interface Color {
		success: Color;
		error: Color;
		warning: Color;
		info: Color;
		bold: Color;
		italic: Color;
	}
}

declare global {
	interface String {
		success: Color;
		error: Color;
		warning: Color;
		info: Color;
		bold: Color;
		italic: Color;
	}
}

/* IBrand Interface */
export interface IBrand extends Document {
	title: string;
	description: string;
	logo: {
		url: string;
		public_id: string;
	};
	products: Types.ObjectId[];
	keynotes: string[];
	tags: string[];
	creator: Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

/* ICart Interface */
export interface ICart extends Document {
	product: mongoose.Types.ObjectId;
	user: mongoose.Types.ObjectId;
	quantity: number;
	createdAt: Date;
	updatedAt: Date;
}

/* ICategory Interface */
export interface ICategory extends Document {
	title: string;
	description: string;
	thumbnail: {
		url: string;
		public_id: string;
	};
	keynotes: string[];
	tags: string[];
	products: mongoose.Types.ObjectId[];
	creator: mongoose.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

/* IFavorite interface */
export interface IFavorite extends Document {
	user: mongoose.Types.ObjectId;
	product: mongoose.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

/* IProduct interface */
export interface IProduct extends Document {
	title: string;
	summary: string;
	thumbnail: IThumbnail;
	gallery: IGalleryImages[];
	features: IFeature[];
	variations: {
		colors: string[];
		sizes: string[];
	};
	campaign: ICampaign;
	price: number;
	category: mongoose.Types.ObjectId;
	brand: mongoose.Types.ObjectId;
	store: mongoose.Types.ObjectId;
	buyers: mongoose.Types.ObjectId[];
	reviews: mongoose.Types.ObjectId[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IThumbnail {
	url: string;
	public_id: string;
}

export interface IGalleryImage {
	url: string;
	public_id: string;
}

export interface IFeature {
	title: string;
	content: string[];
}

export interface ICampaign {
	title: string;
	state: string;
}

/* IPurchase interface */
const PurchaseStatus: PurchaseStatus[] = ['pending', 'delivered'];

export interface IProductSubdocument {
	product: mongoose.Types.ObjectId;
	quantity: number;
}

export interface IPurchase extends Document {
	customer: mongoose.Types.ObjectId;
	products: IProductSubdocument[];
	customerId: string;
	orderId: string;
	totalAmount: number;
	status: PurchaseStatus;
	createdAt?: Date;
	updatedAt?: Date;
}

/* IReview interface */
interface IReview extends Document {
	reviewer: mongoose.Types.ObjectId;
	product: mongoose.Types.ObjectId;
	rating: number;
	comment: string;
	createdAt?: Date;
	updatedAt?: Date;
}

/* IStore interface */
interface IStore extends Document {
	title: string;
	description: string;
	thumbnail: {
		url: string;
		public_id: string;
	};
	owner: mongoose.Types.ObjectId;
	products: mongoose.Types.ObjectId[];
	status: 'active' | 'inactive';
	keynotes: string[];
	tags: string[];
	createdAt?: Date;
	updatedAt?: Date;
}

/* IUser interface */
interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	avatar: {
		url: string;
		public_id: string;
	};
	phone: string;
	role: 'admin' | 'buyer' | 'seller';
	status: 'active' | 'inactive';
	cart: mongoose.Types.ObjectId[];
	favorites: mongoose.Types.ObjectId[];
	reviews: mongoose.Types.ObjectId[];
	purchases: mongoose.Types.ObjectId[];
	store: mongoose.Types.ObjectId;
	brand: mongoose.Types.ObjectId;
	category: mongoose.Types.ObjectId;
	products: mongoose.Types.ObjectId[];
	address: string;
	createdAt?: Date;
	updatedAt?: Date;
	encryptedPassword(password: string): Promise<string>;
	comparePassword(candidatePassword: string, hash: string): Promise<boolean>;
}

/* signUp Request */
export interface SignUpRequest extends Request {
	body: {
		name: string;
		email: string;
		password: string;
		phone: string;
	};
	file?: any;
}

/* UserData interface - for generating token */
export interface UserData {
	_id: string;
	name: string;
	email: string;
	role: string;
	status: string;
}
