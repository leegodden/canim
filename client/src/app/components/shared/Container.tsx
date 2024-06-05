import { FC, ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
	return (
		<section
			{...props}
			className={`max-w-7xl mx-auto px-4 w-full${className ? ` ${className}` : ''}`}
		>
			{children}
		</section>
	);
};

export default Container;
