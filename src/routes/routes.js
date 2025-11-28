import express from 'express';
import { createUser,deleteUser,getAllUser, updtadeUser } from '../controllers/userController.js';

const router = express.Router()

router.post('/cadastro', createUser )
router.get('/todos', getAllUser )
router.delete('/todos/:id',deleteUser)
router.patch('/todos/:id', updtadeUser)

export default router
