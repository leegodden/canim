import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
import { IUser } from '../types/types';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, 'Please, provide your full name'],
			trim: true,
			maxLength: [100, 'Your name would be at most 100 characters'],
		},
		email: {
			type: String,
			required: [true, 'Please, provide your email address'],
			validate: [validator.isEmail, 'Provide a valid email address'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please, provide a strong password'],
			minLength: [8, 'Password should be at least 8 characters'],
			maxLength: [20, 'Password should be at most 20 characters'],
			validate: {
				validator: function (value: string) {
					return validator.isStrongPassword(value, {
						minUppercase: 1,
						minLowercase: 1,
						minNumbers: 1,
						minSymbols: 1,
					});
				},
				message:
					'Password should contain at least 1 uppercase, 1 lowercase, 1 number, and 1 symbol',
			},
		},
		avatar: {
			url: {
				type: String,
				default: 'https://placehold.co/300x300.png',
				validate: {
					validator: (url: string) => validator.isURL(url),
					message: 'Please provide a valid avatar URL',
				},
			},
			public_id: {
				type: String,
				default: 'N/A',
			},
		},
		phone: {
			type: String,
			required: [true, 'Please, provide your phone number'],
			unique: true,
			validate: {
				validator: (phone: string) =>
					validator.isMobilePhone(phone, 'any', { strictMode: false }),
				message: 'Phone number {VALUE} is not valid',
			},
		},
		role: {
			type: String,
			enum: ['admin', 'buyer', 'seller'],
			default: 'buyer',
		},
		status: {
			type: String,
			enum: ['active', 'inactive'],
			default: 'active',
		},
		// Reference fields configuration can follow...
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

userSchema.pre<IUser>('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

userSchema.methods.encryptedPassword = async function (
	password: string
): Promise<string> {
	return bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (
	candidatePassword: string,
	hash: string
): Promise<boolean> {
	return bcrypt.compare(candidatePassword, hash);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
