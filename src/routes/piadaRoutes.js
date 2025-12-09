import { Router } from 'express';
import  authMiddlewere  from '../middlewares/authMiddlewere.js';
import { submeterPiada, buscarPiadasAleatoria,buscar10PiadasAleatorias,
         listarPiadasPendentes, aprovarPiadas
        } from '../controllers/piadaController.js';

const router = Router();

router.post('/piadas', submeterPiada);

router.get('/10Piadas',buscar10PiadasAleatorias );
router.get('/piadas', buscarPiadasAleatoria);

router.get('/piadas/pendentes',authMiddlewere, listarPiadasPendentes);
router.put('/piadas/:id/aprovar',authMiddlewere, aprovarPiadas);

export default router; 