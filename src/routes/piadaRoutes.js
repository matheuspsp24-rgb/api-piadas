import { Router } from 'express';
import { submeterPiada, buscarPiadasAleatoria,
         listarPiadasPendentes, aprovarPiadas
        } from '../controllers/piadaController.js';

const router = Router();

router.post('/piadas', submeterPiada);

router.get('/piadas', buscarPiadasAleatoria);

router.get('/piadas/pendentes', listarPiadasPendentes);
router.put('/piadas/:id/aprovar',aprovarPiadas);

export default router; 