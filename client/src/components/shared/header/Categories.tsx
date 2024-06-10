'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { BiCategory, BiChevronDown } from 'react-icons/bi';
import OutsideClick from '../OutsideClick';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CategoryCard from '../skeletonLoading/CategoryCard';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [tab, setTab] = useState('categories');
	return (
		<>
			<button
				className='border px-2.5 py-1.5 rounded flex flex-row items-center gap-x-0.5 hover:border-black transition-colors'
				onClick={() => setIsOpen(!isOpen)}
			>
				<BiCategory className='h-6 w-6' />
				<BiChevronDown className='h-6 w-6' />
			</button>
			<section className='flex flex-col gap-y-4 h-full'>
				<div className='flex flex-row gap-x-2'>
					{isOpen && (
						<OutsideClick
							onOutsideClick={() => setIsOpen(false)}
							className='absolute top-full left-0 w-80 h-96 overflow-y-auto bg-white border rounded p-4 flex flex-col gap-y-4'
						>
							<section className='flex flex-col gap-y-4 h-full'>
								<div className='flex flex-row gap-x-2'>
									<button
										type='button'
										className={`text-xs px-2 py-1 border rounded ${
											tab === 'categories' ? '!bg-black !text-white' : ''
										}`}
										onClick={() => setTab('categories')}
									>
										Categories
									</button>
									<button
										type='button'
										className={`text-xs px-2 py-1 border rounded ${
											tab === 'brands' ? '!bg-black !text-white' : ''
										}`}
										onClick={() => setTab('brands')}
									>
										Brands
									</button>
									<button
										type='button'
										className={`text-xs px-2 py-1 border rounded ${
											tab === 'stores' ? '!bg-black !text-white' : ''
										}`}
										onClick={() => setTab('stores')}
									>
										Stores
									</button>
								</div>
								<div className='h-full overflow-y-auto scrollbar-hide'></div>
							</section>
						</OutsideClick>
					)}
				</div>
			</section>
		</>
	);
};
export default Categories;
