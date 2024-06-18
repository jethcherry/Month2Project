import Joi from "joi";

export const hotelShema = Joi.object({
   
    HotelName: Joi.string().required().messages({
        'any.required': "Name is required"
    }),
    HotelDescription: Joi.string().required().messages({
        'any.required': "Description is required"
    }),

    HotelLocation: Joi.string().required().messages({
        'any.required': "Location is required"
    }),
    HotelRating: Joi.string().required().messages({
        'any.required': "Rating is required is required"
    }),
    
    Price: Joi.string().required().messages({
        'any.required': "Price is required"
    }),
    
    
  
    isAdmin: Joi.boolean().optional()  
});


