import express from 'express';
import {verifyToken,getUser, getAllUser, deleteUser } from '../controllers/userController.js';


const router = express.Router();


router.get('/', verifyToken, getUser);
router.get('/', getAllUser);
router.delete('/:userId', deleteUser);

export default router;
