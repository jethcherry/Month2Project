import { Router } from 'express';
import {createBooking,getBookings,getBooking,updateBooking,cancelBooking} from '../controllers/bookingControllers';

const bookingRoutes = Router();


bookingRoutes.post('/create', createBooking);
bookingRoutes.get('/all', getBookings);
bookingRoutes.get('/:bookingId', getBooking);
bookingRoutes.put('/update/:bookingId', updateBooking);
bookingRoutes.delete('/cancel/:bookingId', cancelBooking);

export default bookingRoutes
