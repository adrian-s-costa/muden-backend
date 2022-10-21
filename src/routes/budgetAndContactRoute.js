import { Router } from 'express';
import { emailController } from '../controllers/emailController.js'

const router = Router();

router.post("/sendemail", emailController);

export default router;