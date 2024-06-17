
import { Router } from 'express';
import { createTour, getTours, getTour, updateTour, deleteTour } from '../controllers/tourControllers';
import { verifyAdmin } from '../middleware';

const tourRoutes = Router();

tourRoutes.post('/create', verifyAdmin, createTour);
tourRoutes.get('/all', getTours);
tourRoutes.get('/:id', getTour);
tourRoutes.put('/update/:id', verifyAdmin, updateTour);
tourRoutes.delete('/delete/:id', verifyAdmin, deleteTour);

export default tourRoutes;
