import express from 'express';
import { protectRoute } from '../middleware/auth';

const router = express.Router();


router.put("/update", protectRoute, updateProfile);


export default router
