import { ReactNode } from 'react';
import Header from '../header/Header';

interface MainProps {
	children?: ReactNode; // Correctly typed `children` prop as ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Main;
