import Link from 'next/link';
import React, { useState } from 'react';
import OutsideClick from '../OutsideClick';
import Image from 'next/image';
import User from '../../icons/User';

const Auth = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className='p-2 rounded-secondary hover:bg-slate-100 transition-colors'
				onClick={() => setIsOpen(!isOpen)}
			>
				<User />
			</button>
		</>
	);
};

export default Auth;
