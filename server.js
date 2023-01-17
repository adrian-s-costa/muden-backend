import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sendemail from './src/routes/budgetAndContactRoute.js'
import loginUser from './src/routes/loginRouter.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(sendemail);
server.use(loginUser);

server.listen(process.env.PORT, ()=>{
    console.log("Server is on!");
});