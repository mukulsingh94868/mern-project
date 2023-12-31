import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// const CONNECTION_URL = 'mongodb+srv://mern_stack:mern_stack123@cluster0.t5q7pda.mongodb.net/';
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    }).catch((error) => {
        console.log(`error: ${error}`);
    })