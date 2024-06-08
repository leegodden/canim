import React, { useEffect, useState } from 'react';
import DetailCard from '../details/DetailCard';
import Image from 'next/image';
import Inform from '../icons/Inform';
import Modal from '../shared/Modal';
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

interface DescriptionProps {
	product: Product;
}

const Description: React.FC<DescriptionProps> = ({
	product = productData.products[0],
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [addReview, setAddReview] = useState<Boolean>(false);

	return (
		<section className='flex flex-col gap-y-2.5'>
			<div className='flex flex-row gap-x-2 items-center'>
				<span className='whitespace-nowrap text-sm text-black'>
					Details of this product
				</span>
				<hr className='w-full' />
			</div>
			<article className='flex flex-col gap-y-4'>
				<p className='text-sm'>{product?.summary}</p>
				<button
					className='px-8 py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit flex flex-row gap-x-2 items-center'
					onClick={() => setIsOpen(!isOpen)}
				>
					Reviews
				</button>
				<div className='flex flex-row gap-x-2 items-center'>
					<span className='whitespace-nowrap text-sm text-black'>
						Features & Policies of this product
					</span>
					<hr className='w-full' />
				</div>
				<div className='flex flex-col gap-y-4'>
					{product?.features?.map((explanation, index) => (
						<DetailCard
							key={index}
							title={explanation?.title}
							content={[explanation?.content]}
						/>
					))}
				</div>
			</article>
			{isOpen && (
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					className='p-6 lg:w-1/3 md:w-1/2 w-full h-96'
				>
					<section className='h-full flex flex-col gap-y-6'>
						<form action='' className='flex flex-row gap-x-2 items-center'>
							<input
								type='text'
								name='comment'
								id='comment'
								placeholder='Write your thoughts...'
								className='w-full text-sm'
							/>
							<input
								type='number'
								name='rating'
								id='rating'
								min='1'
								max='5'
								placeholder='Value'
								className='w-fit text-sm'
							/>
							<input
								type='submit'
								value='Submit'
								className='text-sm p-2 border bg-black text-white rounded cursor-pointer'
							/>
						</form>

						{product?.reviews?.length === 0 ? (
							<p className='text-sm flex flex-row gap-x-1 items-center justify-center'>
								<Inform /> No reviews added yet!
							</p>
						) : (
							<div className='h-full overflow-y-auto scrollbar-hide flex flex-col gap-y-4'>
								{product?.reviews?.map((review, index) => (
									<article
										key={index}
										className='flex flex-col gap-y-2 p-4 bg-slate-50 rounded'
									>
										<div className='flex flex-row gap-x-2'>
											<Image
												src={review?.reviewer?.avatar?.url}
												alt={review?.reviewer?.avatar?.public_id}
												width={40}
												height={40}
												className='rounded object-cover h-[40px] w-[40px]'
											/>
											<div className='flex flex-col gap-y-1'>
												<h2 className='text-base'>{review?.reviewer?.name}</h2>
												<p className='text-xs'>{review?.reviewer?.email}</p>
												<p className='text-xs'>
													{new Date(review?.createdAt).toLocaleDateString('en-GB')} •
													⭐ {review?.rating}
												</p>
											</div>
										</div>
										<p className='text-sm'>{review?.comment}</p>
									</article>
								))}
							</div>
						)}
					</section>
				</Modal>
			)}
		</section>
	);
};

export default Description;
