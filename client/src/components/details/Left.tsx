import React, { FC, HTMLAttributes, ReactNode } from 'react';
import DetailCard from './DetailCard';
import LoadImage from '../shared/LoadImage';
import Discount from '../icons/Discount';
import SoldOut from '../icons/SoldOut';
import Arrival from '../icons/Arrival';
import productData from '../shared/data/products.json';

interface Product {
	id: number;
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

interface LeftProps {
	product: Product;
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
	className?: string;
}

const Left: React.FC<LeftProps> = ({ product = productData.products[0] }) => {
	function getColumnSpanClass(index: number, totalThumbnails: number): string {
		if (totalThumbnails === 1) {
			return 'col-span-12';
		} else if (totalThumbnails === 2) {
			return 'col-span-6';
		} else if (totalThumbnails === 3) {
			return index === 0 ? 'col-span-12' : 'col-span-6';
		} else if (totalThumbnails === 4) {
			return 'col-span-6';
		} else if (totalThumbnails === 5) {
			return index <= 1 ? 'col-span-6' : 'col-span-4';
		} else {
			return 'col-span-3';
		}
	}

	const hashTags: string[] = [
		...(product?.category?.tags || []),
		...(product?.brand?.tags || []),
		...(product?.store?.tags || []),
	].filter((tag): boolean => tag !== undefined);

	return (
		<section className='lg:col-span-6 md:col-span-6 col-span-12 flex flex-col gap-y-4'>
			<div className='flex flex-col gap-y-4'>
				<LoadImage
					src={product.thumbnail?.url || ''}
					alt={product.thumbnail?.public_id || ''}
					width={480}
					height={200}
					className='rounded w-full h-full object-cover'
				/>
				<div className='grid grid-cols-12 gap-4'>
					{product?.gallery?.map((thumbnail, index) => (
						<LoadImage
							src={thumbnail?.url}
							key={index}
							alt={thumbnail?.public_id}
							className={
								'rounded object-cover max-w-full w-full h-full' +
								' ' +
								getColumnSpanClass(index, product.gallery?.length ?? 0)
							}
							width={480}
							height={200}
						/>
					))}
				</div>
			</div>
			<article className='flex flex-col gap-y-4'>
				<div className='flex flex-row gap-x-2.5'>
					<Badge className='text-indigo-800 bg-indigo-100'>
						{product?.variations?.colors?.length + ' ' + 'Colors'}
					</Badge>
					<Badge className='text-purple-800 bg-purple-100'>
						{product?.variations?.sizes?.length + ' ' + 'Sizes'}
					</Badge>
					{product?.campaign?.state === 'discount' && (
						<Badge className='text-cyan-800 bg-cyan-100 flex flex-row items-center gap-x-1'>
							<Discount /> {product?.campaign?.title}
						</Badge>
					)}
					{product?.campaign?.state === 'sold-out' && (
						<Badge className='text-cyan-800 bg-cyan-100 flex flex-row items-center gap-x-1'>
							<SoldOut /> {product?.campaign?.title}
						</Badge>
					)}
					{product?.campaign?.state === 'arrival' && (
						<Badge className='text-cyan-800 bg-cyan-100 flex flex-row items-center gap-x-1'>
							<Arrival /> {product?.campaign?.title}
						</Badge>
					)}
					{product?.campaign?.state === 'on-sale' && (
						<Badge className='text-blue-800 bg-blue-100 flex flex-row items-center gap-x-1'>
							<Arrival /> {product?.campaign?.title}
						</Badge>
					)}
				</div>
				<div className='flex flex-col gap-y-2.5'>
					<DetailCard
						title={`From ${product?.category?.title} Category`}
						content={product?.category?.keynotes ?? []}
					/>
					<DetailCard
						title={`From ${product?.brand?.title} Brand`}
						content={product?.brand?.keynotes ?? []}
					/>
					<DetailCard
						title={`From ${product?.store?.title} Store`}
						content={product?.store?.keynotes ?? []}
					/>

					<div className='flex flex-row flex-wrap gap-1 mt-4'>
						{hashTags.map((hashTag, index) => (
							<span
								key={index}
								className='!text-xs border px-2 py-0.5 rounded-sm'
							>{`#${hashTag}`}</span>
						))}
					</div>
				</div>
			</article>
		</section>
	);
};

const Badge: FC<BadgeProps> = ({ children, className, ...props }) => {
	return (
		<span
			className={`px-3 py-1 rounded text-xs w-fit${
				className ? ' ' + className : ''
			}`}
			{...props}
		>
			{children}
		</span>
	);
};

export default Left;

// getColumnSpanClass(index, product.gallery?.length ?? 0)
