
import { Request, Response } from 'express';
import { DbHelper } from '../Databasehelpers';
import { Tour } from '../models/tourModel';

const dbInstance = new DbHelper();

export const createTour = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { TourId, Name, Description, Price, Duration, Location } = req.body;

        await dbInstance.exec('createTour', { TourId,Name, Description,Price,Duration,Location,});

        return res.status(201).json({ message: 'Tour was added successfully!' });
    } catch (error) {
        return res.status(500).json(error );
    }
};

export const getTours = async (req: Request, res: Response): Promise<void> => {
    try {
        const tours = (await dbInstance.exec('getTours', {})).recordset as Tour[];
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getTour = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const result = await dbInstance.exec('getTour', { TourId: id });
        const tour = result.recordset[0] as Tour;

        if (!tour) {
             res.status(404).json({ message: 'Tour not found.' });
        }

        res.status(200).json(tour);
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateTour = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { Name, Description, Price, Duration, Location } = req.body;

        await dbInstance.exec('updateTour', {
            TourId: id,
            Name,
            Description,
            Price,
            Duration,
            Location,
        });

        return res.status(200).json({ message: 'Tour was updated successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deleteTour = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { payload } = req.body;

        if (!payload || !payload.isAdmin) {
            return res.status(403).json({ message: 'Only admins can delete tours.' });
        }

        await dbInstance.exec('deleteTour', { TourId: id });

        return res.status(200).json({ message: 'Tour was deleted successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};
