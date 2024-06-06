import React, { useState, useEffect } from 'react';
import Container from '../shared/Container';
import Card from '../shared/Card';
import ProductCard from '../shared/skeletonLoading/ProductCard';

interface NewArrivalsProps {}

const NewArrivals: React.FC<NewArrivalsProps> = ({}) => {
	const [productsLoading, setProductsLoading] = useState<Boolean>(false);

	return (
		<Container>
			<section className='flex flex-col gap-y-10'>
				<h1 className='text-4xl'>
					New Arrivals. <span className=''>New Equipment</span>
				</h1>
				<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-8'>
					{productsLoading ? (
						<>
							{[1, 2, 3, 4].map((_, index) => (
								<ProductCard key={index} />
							))}
						</>
					) : (
						<>
							{[1, 2, 3, 4].map((_, index) => (
								<Card key={index} />
							))}
						</>
					)}
				</div>
			</section>
		</Container>
	);
};

export default NewArrivals;
