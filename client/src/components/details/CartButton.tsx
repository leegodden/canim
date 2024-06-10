import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Bag from '../icons/Bag';
import Spinner from '../shared/Spinner';
import { Product } from '../../../types/product';
import productData from '@/components/shared/data/products.json';

interface CartButtonProps {
	product: Product;
}

const CartButton: React.FC<CartButtonProps> = ({
	product = productData.products[0],
}) => {
	const [qty, setQty] = useState(1);
	const [addingToCart, setAddingToCart] = useState(false);

	return (
		<section className='flex flex-row items-center gap-x-4'>
			<div className='flex flex-row gap-x-2 items-center border px-1 py-0.5 rounded-secondary h-full'>
				<button
					className='border border-black/30 disabled:border-zinc-100 p-1.5 rounded-secondary'
					onClick={() => setQty(qty - 1)}
					disabled={qty === 1}
				>
					<AiOutlineMinus className='w-4 h-4' />
				</button>
				<span className='px-2 py-0.5 rounded-primary border w-12 inline-block text-center'>
					{qty}
				</span>
				<button
					className='border border-black/30 disabled:border-zinc-100 p-1.5 rounded-secondary'
					onClick={() => setQty(qty + 1)}
				>
					<AiOutlinePlus className='w-4 h-4' />
				</button>
			</div>
			<button
				className='px-8 py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit flex flex-row gap-x-2 items-center'
				disabled={qty === 0 || addingToCart}
			>
				{addingToCart ? (
					<Spinner />
				) : (
					<>
						<Bag /> Add to Cart
					</>
				)}
			</button>
		</section>
	);
};

export default CartButton;
