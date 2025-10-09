import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/routes.js';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import { errorMiddleware } from './Error/ErrorHandler.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

// Middlewares part
app.use(cors()); // cross origin blocks
app.use(bodyParser.json());

// middleware for global error handler 
app.use(errorMiddleware);

// database connection
connectDB();

// by default route
app.get('/', (req, res) => {
    res.send('Connect Our App In MongoDB DataBase');
});

// define all Tasks base route 
app.use("/api/todos", taskRoutes);

// global error
app.listen(port, () => {
    console.log(` server is running on the port : ${port}`);
});