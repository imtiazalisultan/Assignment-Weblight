import express from 'express';

import dotenv from 'dotenv';

import Connection from './database/db.js';

import defaultData from './defaultData.js';

import cors from 'cors';

import Router from './routes/route.js';

import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/',Router);
dotenv.config({path:'./config.env'});

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URL

Connection(URL);

app.listen(PORT,()=>{
    console.log(`Server is listening at Port ${PORT}`);
});

defaultData();
