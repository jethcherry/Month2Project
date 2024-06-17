import { Request, Response } from 'express';
import { DbHelper } from '../Databasehelpers';
import { Hotel } from '../models/hotelModels'; 

const dbHelper = new DbHelper();

export const createHotel = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { hotelId, HotelName, HotelDescription, HotelLocation, HotelRating, Price } = req.body;

        await dbHelper.exec('createHotel', {
            hotelId,
            HotelName,
            HotelDescription,
            HotelLocation,
            HotelRating,
            Price,
        });

        return res.status(201).json({ message: 'Hotel was added successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

export const getHotels = async (req: Request, res: Response): Promise<void> => {
    try {
        const hotels = (await dbHelper.exec('GetHotels', {})).recordset as Hotel[];
        res.status(200).json(hotels);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch hotels" });
    }
};

export const getHotel = async (req: Request, res: Response): Promise<void> => {
    try {
        const { hotelId } = req.params;

        const result = await dbHelper.exec('GetHotel', { hotelId });
        const hotel = result.recordset[0] as Hotel;

        if (!hotel) {
            res.status(404).json({ message: 'Hotel not found' });
        }

        res.status(200).json(hotel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch hotel" });
    }
};

export const updateHotel = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { hotelId } = req.params;
        const { HotelName, HotelDescription, HotelLocation, HotelRating, Price } = req.body;

        await dbHelper.exec('UpdateHotel', {
            hotelId,
            HotelName,
            HotelDescription,
            HotelLocation,
            HotelRating,
            Price,
        });

        return res.status(200).json({ message: 'Hotel updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update hotel" });
    }
};

export const deleteHotel = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { hotelId } = req.params;
        const { payload } = req.body;

        
        if (!payload || !payload.isAdmin) {
            return res.status(403).json({ message: 'Only admins can delete hotels.' });
        }

        await dbHelper.exec('deleteHotel', { hotelId });

        return res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete hotel" });
    }
};
