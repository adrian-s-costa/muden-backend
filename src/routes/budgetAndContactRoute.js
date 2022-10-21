import { Router } from 'express';
import { emailController, teste } from '../controllers/emailController.js'

const router = Router();

router.post("/sendemail", emailController);
router.get("/", teste);

export default router;