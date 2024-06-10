import 'colors';

import 'colors';

declare module 'colors' {
	interface Color {
		success: Color;
		error: Color;
		warning: Color;
		info: Color;
		bold: Color;
		italic: Color;
	}
}

declare global {
	interface String {
		success: Color;
		error: Color;
		warning: Color;
		info: Color;
		bold: Color;
		italic: Color;
	}
}

/* Brand Interface */
export interface BrandDocument extends Document {
	title: string;
	description: string;
	logo: {
		url: string;
		public_id: string;
	};
	products: Types.ObjectId[];
	keynotes: string[];
	tags: string[];
	creator: Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}
