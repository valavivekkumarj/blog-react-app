import mongoose from 'mongoose';

const url='mongodb://localhost:27017/postDB';
mongoose.connect(url).then(()=>{
    console.log('connneted');
}).catch((err)=>{
    console.log(err);
})


const postSchema=new mongoose.Schema({
    id:{
        type:Number,
    },
    title:{
        type:String,
        default:'title not found',
        set:(val)=>val==''?'title not found':val,
    },
    body:{
        type:String,
        default:"article not found.",
        set:(val)=>val===''?'article not found.':val,
    },
    datetime:{
        type:Date,
        default: Date.now

    }
});
const postModel=mongoose.model('post',postSchema);
export default postModel;