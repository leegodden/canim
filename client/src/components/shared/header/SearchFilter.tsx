import Search from '../../icons/Search';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SearchFilterProps {}

const SearchFilter: React.FC<SearchFilterProps> = ({}) => {
	const [open, setOpen] = useState<Boolean>();
	return (
		<>
			<button
				className='p-2 rounded-secondary hover:bg-slate-100 transition-colors'
				onClick={() => setOpen(!open)}
			>
				<Search className='h-6 w-6' />
			</button>
		</>
	);
};

export default SearchFilter;
