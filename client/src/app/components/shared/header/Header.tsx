'use client';

import React, { FC } from 'react';
import Container from '../Container';
import Image from 'next/image';
import Categories from './Categories';
import SearchFilter from './SearchFilter';
import Auth from './Auth';
import MyCart from './MyCart';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<Container className=''>
			<nav className='rounded-xl p-4 flex flex-row justify-between'>
				<div className='flex flex-row gap-x-4 items-center relative'>
					<Image
						src='/logo.png'
						alt='logo'
						width={141}
						height={40}
						className='h-[40px] object-contain md:block hidden cursor-pointer'
						onClick={() => window.open('/', '_self')}
					/>
					<div className='border-l h-7 rounded' />

					<Categories />
				</div>
				<div className='flex flex-row gap-x-2 relative'>
					<button
						className='p-2 rounded-secondary hover:bg-slate-100 transition-colors'
						onClick={() => window.open('/dashboard', '_self')}
					></button>

					<SearchFilter />
					<Auth />
					<MyCart />
				</div>
			</nav>
		</Container>
	);
};

export default Header;
