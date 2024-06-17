import nodemailer from 'nodemailer'
import path from 'path';
import dotenv from 'dotenv';
import ejs from 'ejs'


dotenv.config({ path: path.resolve(__dirname, "../../.env") });

//Create a configuration object

let config = {
    host:"smtp.gmail.com",
    service:"gmail",
    port:"587",
    auth:{
        user: process.env.EMAIL,
        pass:process.env.PASS
    }

}

/// step 2 is to create a transporter

function createTransporter (config:any){
    return nodemailer.createTransport(config)

}

export async function sendEmail(messageOption:any) {
    let transporter =  createTransporter(config)
    await transporter.verify()
    await transporter.sendMail(messageOption,(err,info)=>{

        if(err){
            console.log(err)
        }
        console.log(info)

    })
    
}




ejs.renderFile(path.join(__dirname, '../../Templates/register.ejs'), { name: "Jethro Cheruiyot" }, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    let messageOption = {
    to: process.env.EMAIL,
    from: process.env.EMAIL,
    cc: '',
    bcc: [],
    subject: "Testing Email",
    html: data // Use the rendered HTML content
};

  
    sendEmail(messageOption)
})


