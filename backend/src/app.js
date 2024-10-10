import express from 'express';
import path from 'path';
import cors from 'cors'
import dotenv from 'dotenv';
import postModel from './models/posts.js';
import postRouter from './routes/post.js';
import errorHandler from './middleware/customeErrorhandler.js';
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(postRouter);
//custome error handler:
app.use(errorHandler);
//edit or update post:
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('runnig on port 3000.')
    }
})