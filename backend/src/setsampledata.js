import mongoose from 'mongoose';
import postModel from './models/posts.js';
import data from './models/sampledata.js';
const url='mongodb://localhost:27017/postDB';
mongoose.connect(url).then(()=>{
    console.log('connneted');
}).catch((err)=>{
    console.log(err);
});

const setsample=async()=>{
    try{
        await postModel.deleteMany()
await postModel.insertMany(data);
console.log('successfully set sample data.')
    }catch(err){
        console.log(err);
    }
}
 setsample();