import React, { useEffect, useState } from 'react';
import Container from '../shared/Container';
import Card from '../shared/Card';
import ProductCard from '../shared/skeletonLoading/ProductCard';
import productData from '@/components/shared/data/products.json';
import { Product } from '../../../types/product';

interface RelativesProps {}

const Relatives: React.FC<RelativesProps> = ({}) => {
	const [productsLoading, setProductsLoading] = useState<Boolean>(false);
	const products = productData.products;
	return (
		<section className='flex flex-col gap-y-10'>
			<h1 className='text-4xl'>
				Related. <span className=''>Products</span>
			</h1>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-8'>
				{productsLoading || !products ? (
					<>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
							<ProductCard key={index} />
						))}
					</>
				) : (
					<>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
							<Card key={index} />
						))}
					</>
				)}
			</div>
		</section>
	);
};

export default Relatives;
