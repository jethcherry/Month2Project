
import express, { json } from 'express';
import hotelRoutes from './routes/hotelRoutes'
import authRoutes from './routes/authRoutes';
import tourRoutes from './routes/tourRoutes';
import { run } from './EmailService';
import cron from 'node-cron'

const app = express();


app.use(json())

app.use('/auth', authRoutes)
app.use('/tour',tourRoutes)
app.use('/hotel',hotelRoutes)
app.listen(5500, () => console.log('Server is Running on port 5500'));

cron.schedule('*/10 * * * * *', async() => {
    await run()
   });