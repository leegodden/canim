'use client';

import { useParams } from 'next/navigation';
import React, { FC } from 'react';

interface pageProps {}

const Detail: React.FC<pageProps> = ({}) => {
	return (
		<div className='h-full w-full flex flex-col gap-y-20'>
			<div className='grid grid-cols-12 gap-8'>Details</div>
		</div>
	);
};

export default Detail;
