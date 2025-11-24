import express from 'express';
import { createUser,deleteUser,getAllUser } from './controllers/userController.js';

const router = express.Router()

router.post('/cadastro', createUser )
router.get('/todos', getAllUser )
router.delete('/todos/:id',deleteUser)
router.delete('/deletar/:id', deleteUser )

export default router
