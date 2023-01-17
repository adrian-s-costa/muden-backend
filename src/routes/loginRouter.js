import { loginUser } from '../controllers/authController.js';
import { Router } from 'express';

const router = Router();

router.post('/login', loginUser);

export default router;