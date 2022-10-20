import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sendemail from './src/routes/budgetAndContactRoute.js'

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(sendemail);

server.listen(5000, ()=>{
    console.log("Server running on port 5000")
});