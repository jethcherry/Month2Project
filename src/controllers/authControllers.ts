
import { Request, Response ,RequestHandler} from 'express';
import { v4 as uid } from 'uuid';
import Bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DbHelper } from '../Databasehelpers'; 
import { User, Payload } from '../models/authModel'; 
import { RegisterShema } from '../helpers'; 

const dbInstance = new DbHelper();


export const registerUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = uid();
        const { Name, Email, Password, isAdmin,isDeleted,isEmailSent} = req.body;

        const { error } = RegisterShema.validate(req.body, { abortEarly: false }); 
        if (error) {
            const errorMessage = error.details.map(d => d.message).join(', ');
            return res.status(400).json({ message: errorMessage });
        }

        const hashedPassword = await Bcrypt.hash(Password, 10);

    
        await dbInstance.exec('addUser', { Id: id, Name, Email, Password: hashedPassword, isAdmin,isDeleted,isEmailSent });

        return res.status(201).json({ message: 'User was added successfully!' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};


export const loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { Email, Password } = req.body;

        const userResult = await dbInstance.exec('getUser', { Email });
        const user: User[] = userResult.recordset as User[];

        if (user.length !== 0) {
            const isValid = await Bcrypt.compare(Password, user[0].Password);
            if (isValid) {
                const payload: Payload = {
                    Sub: user[0].Id,
                    Name: user[0].Name,
                    isAdmin: user[0].isAdmin 
                };
                const token = jwt.sign(payload, process.env.SECRET as string, { expiresIn: '2h' });
                return res.status(200).json({ message: 'Login Successful', token });
            }
        }

        return res.status(400).json({ message: 'Invalid Credentials' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = (await dbInstance.exec('getUsers', {})).recordset as User[];
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};



export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { Name, Email, Password, isAdmin, isDeleted, isEmailSent } = req.body;

        await dbInstance.exec('updateUser', { Id: id, Name, Email, Password, isEmailSent, isDeleted, isAdmin });

        return res.status(200).json({ message: 'User was updated successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const payload: Payload = req.body.payload;

        if (!payload || !payload.isAdmin) {
            return res.status(403).json({ message: 'Only admins can delete users.' });
        }

        await dbInstance.exec('deleteUser', { Id: id });

        return res.status(200).json({ message: 'User was deleted successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};
