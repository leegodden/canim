import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import CartButton from './CartButton';
import Description from './Description';
import Policies from './Policies';
import productData from '../shared/data/products.json';

interface Product {
	id: number;
	title: string; // Added title field
	price: number; // Added price field, assuming it should be a number
	thumbnail?: {
		url: string;
		public_id: string;
	};
	gallery?: Array<{
		url: string;
		public_id: string;
	}>;
	category?: {
		tags: string[];
		title: string; // Title for the category
		keynotes: string[]; // Descriptive keynotes for the category
	};
	brand?: {
		name: string;
		tags: string[];
		title: string; // Title for the brand
		keynotes: string[]; // Brand-specific descriptive notes
	};
	store?: {
		name: string;
		tags: string[];
		title: string; // Title for the store
		keynotes: string[]; // Descriptive notes for the store
	};
	variations?: {
		colors: string[];
		sizes: string[];
	};
	campaign?: {
		state: 'discount' | 'sold-out' | 'arrival' | 'on-sale' | string; // Possible states of a campaign
		title: string; // Title of the campaign for display
	};
	summary: string; // Summary of the product
	features: Array<{
		// Array of features for the product
		title: string;
		content: string;
	}>;
	reviews: Array<{
		// Array of reviews for the product
		comment: string;
		rating: number;
		createdAt: string; // Date-time string in ISO 8601 format
		reviewer: {
			name: string;
			email: string;
			avatar: {
				url: string;
				public_id: string;
			};
		};
	}>;
}

interface RightProps {
	product: Product;
}

const Right: React.FC<RightProps> = ({ product = productData.products[0] }) => {
	return (
		<section className='lg:col-span-6 md:col-span-6 col-span-12 flex flex-col gap-y-8'>
			<article className='flex flex-col gap-y-8'>
				<div className='flex flex-col gap-y-4'>
					<h1 className='lg:text-5xl md:text-3xl text-xl'>{product?.title}</h1>
					<div className='flex flex-row items-center gap-x-2'>
						<span className='flex items-center border-2 border-green-500 rounded-primary py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium'>
							<span className='text-green-500 !leading-none'>
								${product.price}.00
							</span>
						</span>
						<div className='border-l h-7 rounded' />
						<span className='text-xs flex items-center gap-x-1 px-2 h-full bg-zinc-50 rounded'>
							<AiFillStar className='w-4 h-4 text-yellow-500' />{' '}
							{product?.reviews?.length}
						</span>
					</div>
				</div>
				<CartButton product={product} />
			</article>
			<Description product={product} />
			<Policies />
		</section>
	);
};

export default Right;
