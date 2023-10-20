import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

import postRoutes from './routes/posts.js';

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL = 'mongodb+srv://mern_stack:mern_stack123@cluster0.t5q7pda.mongodb.net/';
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    }).catch((error) => {
        console.log(`error: ${error}`);
    })