import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';

/* cloudinary config */
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: async (_: any, file: Express.Multer.File) => {
		return {
			// folder & id on cloudinary to store images
			folder: 'canim-template',
			public_id: `${Date.now()}_${file.originalname
				.replace(/[^\w\s.-]/g, '')
				.replace(/\s+/g, '-')
				.toLowerCase()}`,
		};
	},
});

const upload = multer({
	storage: storage,
	fileFilter: (_: any, file: Express.Multer.File, cb: FileFilterCallback) => {
		const supportedImage = /jpg|jpeg|png/i;
		const extension = path.extname(file.originalname);

		if (supportedImage.test(extension)) {
			cb(null, true);
		} else {
			cb(new Error('File must be in png, jpg, or jpeg format'));
		}
	},
});

export default upload;
