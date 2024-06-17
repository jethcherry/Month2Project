import mssql from 'mssql';
import ejs from 'ejs';
import { sqlConfig } from '../config';
import path from 'path';
import dotenv from 'dotenv';
import { sendEmail } from '../nodemailer';




dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export interface User {
    Id: string;
    Email: string;
    Name: string;
    Password: string;
    isDeleted: number;
    isEmailSent: boolean;
}

export async function run() {
    try {
        let pool = await mssql.connect(sqlConfig);
        let users = await (await pool.request().query("SELECT * FROM Users WHERE isEmailSent = 0")).recordset as User[];

        users.forEach(user => {
            ejs.renderFile(path.join(__dirname, '../../Templates/register.ejs'), { name: user.Name }, async (error, data) => {
                if (error) {
                    console.error(error);
                    return;
                }

                let messageOption = {
                    to: user.Email,
                    from: process.env.EMAIL,
                    subject: "Hello There",
                    html: data
                };

                await sendEmail(messageOption);
                await pool.request().query(`UPDATE Users isEmailSent=1 WHERE Id = ${user.Id}`)
            });

        });
    } catch (error) {
        console.error(error);
    }
}
