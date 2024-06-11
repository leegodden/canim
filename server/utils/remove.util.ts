import * as cloudinary from 'cloudinary';

/* Remove image from Cloudinary */
async function remove(public_id: string) {
	await (cloudinary as any).uploader.destroy(public_id);
}

export default remove;
