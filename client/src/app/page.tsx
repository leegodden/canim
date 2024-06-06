'use client';

import Main from '@/components/shared/layouts/Main';
import Banner1 from '@/components/home/Banner1';
interface pageProps {}

const Home: React.FC<pageProps> = ({}) => {
	return (
		<>
			<Main />
			<main className='flex flex-col gap-y-20 w-full'>
				<Banner1 />
			</main>
		</>
	);
};

export default Home;
