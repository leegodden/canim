'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import Discount from '../icons/Discount';
import SoldOut from '../icons/SoldOut';
import Arrival from '../icons/Arrival';
import { useRouter } from 'next/navigation';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
	const router = useRouter();

	// temp while building frontend
	const products = [
		{ _id: '1', title: 'AcoustiPeak Pro: Immerse in Unparalleled Audio Excellence' },
	];

	return (
		<div className='flex-shrink-0 flex flex-col gap-y-6 group border hover:border-black transition-colors rounded-lg'>
			<div className='relative h-[200px] w-full rounded-lg'>
				{/* CARD IMG */}
				<Image
					src='/assets/home/newArrivals/headset3.jpg'
					alt='headset3'
					width={296}
					height={200}
					className='h-[200px] w-full rounded-t-lg object-cover'
				/>

				{/* LIKE BUTTON */}
				<button className='border border-transparent bg-white hover:border-black shadow p-1 absolute bottom-4 left-4 rounded-secondary opacity-0 group-hover:opacity-100 transition-all'>
					<MdFavorite className={`w-5 h-5 text-black`} />
				</button>

				{/* BRAND AND STORE THUMBNAILS */}
				<div className='flex flex-row gap-x-2.5 absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity'>
					<Logo />
					<Logo />
				</div>

				{/* DISCOUNT */}
				<span className='text-xs bg-white/80 px-2.5 py-0.5 rounded-xl absolute bottom-4 right-4 cursor-not-allowed'>
					<span className='flex flex-row gap-x-0.5 items-center'>
						<Discount />
						{/* {product?.campaign.title} */}
					</span>

					{/* SOLD OUT */}
					<span className='flex flex-row gap-x-0.5 items-center'>
						<SoldOut />
					</span>

					{/* NEW ARRIVALS */}
					<span className='flex flex-row gap-x-0.5 items-center'>
						<Arrival />
					</span>

					<span className='flex flex-row gap-x-0.5 items-center'>
						<Arrival />
					</span>
				</span>
			</div>
			<article className='flex flex-col gap-y-3.5 px-4 h-full'>
				{/* COLOR AND SIZE BADGES */}
				<div className='flex flex-row items-center gap-x-1.5'>
					<Badge className='text-indigo-800 bg-indigo-100'>4 Colors</Badge>
					<div className='h-5 border-l w-[1px]'></div>
					<Badge className='text-purple-800 bg-purple-100'>2 Sizes</Badge>
				</div>
				{/* TITLE */}
				<div className='flex flex-col gap-y-4 cursor-pointer h-full'>
					{/* Temp while buidling frin */}
					{products.map((product) => (
						<h2
							key={product._id}
							className='line-clamp-2 h-full cursor-pointer'
							onClick={() => {
								router.push(
									`/product?product_id=${product._id}&product_title=${product.title
										.replace(/ /g, '-')
										.toLowerCase()}`
								);
							}}
						>
							{product.title}
						</h2>
					))}

					{/* PRICE */}
					<div className='flex flex-row items-end justify-between mt-auto'>
						<span className='flex items-center border-2 border-green-500 rounded py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium'>
							<span className='text-green-500 !leading-none'>£999.00</span>
						</span>

						{/* STARS */}
						<span className='flex flex-row items-center gap-x-0.5'>
							<AiFillStar className='text-[#ffc242]' />
							<span className='text-sm'>5</span>
						</span>
					</div>
				</div>
			</article>
			<div></div>
		</div>
	);
};

interface LogoProps {
	src: string;
	alt: string;
	className?: string;
}

function Logo() {
	return (
		<Image
			src='/assets/home/newArrivals/headset3.jpg'
			alt='headset'
			width={30}
			height={30}
			className={
				'w-[30px] h-[30px] object-cover rounded-[5pm] shadow border border-transparent hover:border-black transition-colors cursor-help'
			}
		/>
	);
}

interface BadgeProps {
	children?: React.ReactNode;
	className?: string;
}
function Badge({ children, className, ...props }: BadgeProps) {
	return (
		<span
			{...props}
			className={
				'px-3 py-1 rounded text-xs w-fit' + (className ? ' ' + className : '')
			}
		>
			{children}
		</span>
	);
}

export default Card;
