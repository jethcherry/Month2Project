// authRoutes.ts

import { Router } from 'express';
import { registerUser, loginUser, getUsers, updateUser, deleteUser } from '../controllers/authControllers';
import { verifyTokens, welcomePage } from '../middleware'; 

const authRoutes = Router();

authRoutes.post('', registerUser);
authRoutes.post('/login', loginUser);
authRoutes.get('', verifyTokens, welcomePage);
authRoutes.get('users',verifyTokens, getUsers);
authRoutes.put('/user', updateUser); 
authRoutes.delete('/user', deleteUser); 

export default authRoutes;
