import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config();

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "", 
      pass: "",
    },
});
