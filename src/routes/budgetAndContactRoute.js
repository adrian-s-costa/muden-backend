import { Router } from 'express';
import { emailController, getMessages } from '../controllers/emailController.js'

const router = Router();

router.post("/sendemail", emailController);
router.get("/messages", getMessages);

export default router;