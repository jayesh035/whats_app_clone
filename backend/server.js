import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();

const mongo_url=process.env.DB_URL;


const app=express();

const PORT=process.env.PORT;
await mongoose.connect(mongo_url).then(()=>{
    console.log('connected to database')
}).catch((e)=>{
    console.log(e);
}).then(()=>{
    
    app.use(cors());
    app.use(bodyParser.json({extended:true}));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/',route);
    app.listen(PORT,()=>{
        console.log('server is listning on PORT:',PORT);
    })
})




 