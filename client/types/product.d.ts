export interface Product {
	id: number;
	title: string;
	price: number;
	thumbnail?: {
		url: string;
		public_id: string;
	};
	gallery?: Array<{
		url: string;
		public_id: string;
	}>;
	category?: {
		tags: string[];
		title: string;
		keynotes: string[];
	};
	brand?: {
		name: string;
		tags: string[];
		title: string;
		keynotes: string[];
	};
	store?: {
		name: string;
		tags: string[];
		title: string;
		keynotes: string[];
	};
	variations?: {
		colors: string[];
		sizes: string[];
	};
	campaign?: {
		state: 'discount' | 'sold-out' | 'arrival' | 'on-sale' | string;
		title: string;
	};
	summary: string;
	features: Array<{
		title: string;
		content: string;
	}>;
	reviews: Array<{
		comment: string;
		rating: number;
		createdAt: string;
		reviewer: {
			name: string;
			email: string;
			avatar: {
				url: string;
				public_id: string;
			};
		};
	}>;
}
