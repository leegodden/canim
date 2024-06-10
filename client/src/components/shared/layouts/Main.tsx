import { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../Footer';

interface MainProps {
	children?: ReactNode; // Correctly typed `children` prop as ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Main;
