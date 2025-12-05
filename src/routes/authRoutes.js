import { Router } from "express";
import { registraUsuario } from "../controllers/authController.js";


const router = Router();
router.post('/usuarios', registraUsuario);

export default router;