import Joi from "joi";

export const tourShema = Joi.object({
   
    Name: Joi.string().required().messages({
        'any.required': "Name is required"
    }),
    Description: Joi.string().required().messages({
        'any.required': "Description is required"
    }),
    Price: Joi.string().required().messages({
        'any.required': "Price is required"
    }),
    Duration: Joi.string().required().messages({
        'any.required': "Duration is required"
    }),

    Location: Joi.string().required().messages({
        'any.required': "Location is required"
    }),



    
    
    isAdmin: Joi.boolean().optional()  
});

export default tourShema


