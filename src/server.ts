
import express, { json } from 'express';
import hotelRoutes from './routes/hotelRoutes'
import authRoutes from './routes/authRoutes';
import tourRoutes from './routes/tourRoutes';
import bookingRoutes from './routes/bookingRoutes';
import cron from 'node-cron'
import cors from 'cors'

const app = express();

app.use(cors)
app.use(json())

app.use('/auth', authRoutes)
app.use('/tour',tourRoutes)
app.use('/hotel',hotelRoutes)
app.use('/bookings',bookingRoutes)
app.listen(5500, () => console.log('Server is Running on port 5500'));

// cron.schedule('*/100 * * * * *', async() => {
//     await run()
//    });