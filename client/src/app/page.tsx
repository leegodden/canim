'use client';

import Main from '@/components/shared/layouts/Main';
import Banner1 from '@/components/home/Banner1';
import Steps from '@/components/home/Steps';
import NewArrivals from '@/components/home/NewArrivals';
import Banner2 from '@/components/home/Banner2';

interface pageProps {}

const Home: React.FC<pageProps> = ({}) => {
	return (
		<>
			<Main>
				<main className='flex flex-col gap-y-20 w-full'>
					<Banner1 />
					<Steps />
					<NewArrivals />
					<Banner2 />
				</main>
			</Main>
		</>
	);
};

export default Home;
