import Cart from '../../icons/Cart';
import React, { useEffect, useState } from 'react';
import OutsideClick from '../OutsideClick';
import Image from 'next/image';

const MyCart: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<button
				className='p-2 rounded-secondary hover:bg-slate-100 transition-colors relative'
				onClick={() => setIsOpen(!isOpen)}
			>
				<Cart className='h-6 w-6' />
			</button>
		</>
	);
};

export default MyCart;
