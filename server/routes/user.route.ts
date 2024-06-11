import express from 'express';

/* middleware imports */
import upload from '../middleware/upload.middleware';
import verify from '../middleware/verify.middleware';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.post('/sign-up', upload.single('avatar'), userController.signUp);

export default router;
