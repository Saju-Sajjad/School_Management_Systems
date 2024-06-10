import express from 'express';
import { logout, refreshToken,login,signup } from '../controllers/authController.js';
import upload from '../Utils/multer.js';
const router = express.Router();
router.post('/signup', upload.single('avatar'), signup); 
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh-token', refreshToken);

export default router;
