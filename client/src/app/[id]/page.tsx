'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const Detail = () => {
	const { id } = useParams();

	return (
		<div className='h-full w-full flex flex-col gap-y-20'>
			<div className='grid grid-cols-12 gap-8'>Detail</div>
		</div>
	);
};

export default Detail;
