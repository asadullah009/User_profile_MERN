import express from 'express';
import { PORT, DataBaseURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './route/userRoute.js';

const app = express();

// ** Middleware allow all origin */
app.use(cors());
// ** Middleware allow custom origin  */
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: 'GET,PUT,POST,DELETE',
        allowedHeaders: 'Content-Type'
    }
));
app.use(express.json());

app.use('/user', userRouter);



mongoose.connect(DataBaseURL)
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((error) => {
        console.log('Error: ', error.message);
    });