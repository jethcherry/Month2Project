import { Router } from "express";
import { createHotel,getHotel,getHotels,updateHotel,deleteHotel } from "../controllers/hotelControllers";
import { verifyAdmin } from "../middleware";

const hotelRoutes = Router()


hotelRoutes.post('/hotels', createHotel);
hotelRoutes.get('/hotels', getHotels);
hotelRoutes.get('/hotels/:hotelId', getHotel);
hotelRoutes.put('/hotels/:hotelId', updateHotel);
hotelRoutes.delete('/hotels/:hotelId',verifyAdmin, deleteHotel);


export default hotelRoutes;