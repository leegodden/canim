import { useEffect, useRef, useCallback, ReactNode, FunctionComponent } from 'react';

interface OutsideClickProps {
	onOutsideClick: () => void;
	children?: ReactNode;
	className?: string;
}

const OutsideClick: FunctionComponent<OutsideClickProps> = ({
	onOutsideClick,
	children,
	className,
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null); // Use the generic HTMLDivElement to specify the element type

	const handleOutsideClick = useCallback(
		(event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				onOutsideClick();
			}
		},
		[onOutsideClick]
	);

	useEffect(() => {
		const handleOutsideClickEvent = (event: Event) =>
			handleOutsideClick(event as MouseEvent);
		document.addEventListener('mousedown', handleOutsideClickEvent);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClickEvent);
		};
	}, [handleOutsideClick]);

	return (
		<div ref={wrapperRef} className={`z-50 mt-2 ${className || ''}`}>
			{children}
		</div>
	);
};

export default OutsideClick;
