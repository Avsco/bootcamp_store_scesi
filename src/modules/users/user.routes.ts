import { Router } from 'express';
import {
  createUserController,
  getAllUserController,
  getOneUserController,
} from './users.controller';

const API_PATH = '/api/v1/user';

const router = Router();

router.get(API_PATH, getAllUserController);
router.get(`${API_PATH}/:id`, getOneUserController);
router.post(API_PATH, createUserController);

export default router;
