'use client';

import Main from '@/components/shared/layouts/Main';
import Banner1 from '@/components/home/Banner1';
import Steps from '@/components/home/Steps';

interface pageProps {}

const Home: React.FC<pageProps> = ({}) => {
	return (
		<>
			<Main />
			<main className='flex flex-col gap-y-20 w-full'>
				<Banner1 />
				<Steps />
			</main>
		</>
	);
};

export default Home;
