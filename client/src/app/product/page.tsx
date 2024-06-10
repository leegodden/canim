'use client';

import React, { useState } from 'react';
import Left from '@/components/details/Left';
import Right from '@/components/details/Right';
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/shared/Container';
import Main from '@/components/shared/layouts/Main';
import productData from '@/components/shared/data/products.json';
import Relatives from '@/components/details/Relatives';

interface Props {}

const Detail: React.FC<Props> = ({}) => {
	const [productLoading, setProductLoading] = useState<Boolean>(false);
	const searchParams = useSearchParams();

	const product = productData.products[0];
	return (
		<Main>
			<Container>
				<div className='h-full w-full flex flex-col gap-y-20'>
					<div className='grid grid-cols-12 gap-8'>
						{productLoading ? (
							<>
								<div className='lg:col-span-6 md:col-span-6 col-span-12'>
									<div className='h-[200px] w-full rounded bg-gray-200 animate-pulse' />
								</div>
								<div className='lg:col-span-6 md:col-span-6 col-span-12'>
									<div className='w-full flex flex-col gap-y-4'>
										<div className='h-[200px] w-full rounded bg-gray-200 animate-pulse' />
										<div className='h-[100px] w-full rounded bg-gray-200 animate-pulse' />
										<div className='h-[50px] w-full rounded bg-gray-200 animate-pulse' />
									</div>
								</div>
							</>
						) : (
							<>
								<Left product={product} />
								<Right product={product} />
							</>
						)}
					</div>
					<Relatives />
				</div>
			</Container>
		</Main>
	);
};

export default Detail;
