import { Router } from 'express';

import AuthMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.use(AuthMiddleware);
router.get('/users', UserController.index);

export default router;