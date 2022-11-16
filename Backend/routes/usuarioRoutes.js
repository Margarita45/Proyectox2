import express from 'express';
import {
    prueba,
    registrar,
    confirmar,
    autenticar,
    perfil
} from '../controllers/usuarioController.js';

// middleware para validar el token
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
// Rutas Protegidas atraves del middleware checkAuth
// Identificamos el usuario y se identifica para mostrale los datos o funcionalidades que le corresponden.
router.get('/perfil', checkAuth, perfil);
export default router;