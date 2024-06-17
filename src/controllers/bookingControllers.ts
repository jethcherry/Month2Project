import { Request, Response } from 'express';
import { DbHelper } from '../Databasehelpers';
import { Booking } from '../models/boookingModels'; 

const dbHelper = new DbHelper();


export const createBooking = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { BookingId, BookingDate, TotalAmount, IsCancelled, TourId, HotelId, UserId } = req.body;

        await dbHelper.exec('CreateBooking', {
            BookingId,
            BookingDate,
            TotalAmount,
            IsCancelled,
            TourId,
            HotelId,
            UserId,
        });

        return res.status(201).json({ message: 'Booking was created successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};


export const getBookings = async (req: Request, res: Response): Promise<void> => {
    try {
        const bookings = (await dbHelper.exec('getBookings', {})).recordset as Booking[];
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

export const getBooking = async (req: Request, res: Response): Promise<void> => {
    try {
        const { bookingId } = req.params;

        const result = await dbHelper.exec('getBooking', { BookingId: bookingId });
        const booking = result.recordset[0] as Booking;

        if (!booking) {
            res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};


export const updateBooking = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { bookingId } = req.params;
        const { BookingDate, TotalAmount, IsCancelled, TourId, HotelId, UserId } = req.body;

        await dbHelper.exec('UpdateBooking', {
            BookingId: bookingId,
            BookingDate,
            TotalAmount,
            IsCancelled,
            TourId,
            HotelId,
            UserId,
        });

        return res.status(200).json({ message: 'Booking updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};


export const cancelBooking = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { bookingId } = req.params;

        await dbHelper.exec('CancelBooking', { BookingId: bookingId });

        return res.status(200).json({ message: 'Booking cancelled successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};
