import Image from 'next/image';
import React, { FC, HTMLAttributes } from 'react';

interface LoadImageProps extends HTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	height: number;
	width: number;
}

const LoadImage: FC<LoadImageProps> = ({ src, alt, height, width, ...rest }) => {
	function toBase64(str: string): string {
		return btoa(encodeURIComponent(str));
	}

	function shimmer(width: number, height: number): string {
		return `https://placehold.co/${width}x${height}.svg`;
	}
	return (
		<Image
			src={src}
			alt={alt}
			height={height}
			width={width}
			placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
			blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
			{...rest}
		/>
	);
};

export default LoadImage;
