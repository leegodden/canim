import React, { ReactNode } from 'react';

// Define an interface for the props expected by the Modal component
interface ModalProps {
	isOpen: boolean; // Whether the modal is open
	onClose: () => void; // Callback function to handle closing the modal
	children: ReactNode; // Children components to be rendered inside the modal
	className?: string; // Optional CSS class to customize the modal styling
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
	if (!isOpen) return null;

	return (
		<section className='fixed inset-0 z-50 flex items-center justify-center'>
			<div
				className='fixed inset-0 bg-secondary/10 backdrop-blur-sm backdrop-filter bg-opacity-100'
				onClick={onClose}
			></div>
			<div
				className={
					'!z-[9999] bg-white rounded p-secondary shadow-lg border border-primary' +
					(className ? ` ${className}` : '')
				}
			>
				{children}
			</div>
		</section>
	);
};

export default Modal;
