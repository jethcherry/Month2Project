import Joi from "joi";

export const bookingShema = Joi.object({
   
    BookingDate: Joi.string().required().messages({
        'any.required': "Date is required"
    }),
    TotalAmount: Joi.string().required().messages({
        'any.required': "Amount is required"
    }),

    
    
    isAdmin: Joi.boolean().optional()  
});

export default bookingShema


