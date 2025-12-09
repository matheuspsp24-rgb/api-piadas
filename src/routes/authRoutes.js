import { Router } from "express";
import { registraUsuario, login } from "../controllers/authController.js";


const router = Router();
router.post('/usuarios', registraUsuario);

router.post('/login', login);

export default router;