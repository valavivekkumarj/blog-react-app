import postModel from "../models/posts.js";
import ApiError from "../utils/Apierror.js";
import ApiResponse from "../utils/ApiResponse.js";
import { format } from "date-fns";
const getpost=async(req,res,next)=>{
   
let data=await postModel.find();
if(!data || data.length===0){
    console.log('data not found.');
    
    throw new ApiError(404,'data not found.')
}
const response=new ApiResponse(200,data,'data fetched successfully.');
response.send(res);
   
}


//add post:
const addpost=async(req,res,next)=>{
   
        let {title,body}=req.body;
        if(!title || !body){
            throw new ApiError(400,'bad request, title and body required.')
           
        }
let data=await postModel(req.body);

if(!data){
    console.log('something went wrong.');
    throw new ApiError(500,'something went wrong.');
   
}
data.datetime=Date.now();
await data.save();
let response=new ApiResponse(201,data,'data created successfully.');
response.send(res);
   
}

//deletepost:
const deletepost=async(req,res)=>{
   
        let {id}=req.params;
        let record=await postModel.findById(id);
        if(!record){
            throw new ApiError(400,{},'bad request. post not found.');
        }
        let data=await postModel.deleteOne({_id:id});
        if(!data){
            console.log(data.err);
          
            let response=new ApiResponse(400,{},'bad request.');
            response.send(res)
        }
        
        let response=new ApiResponse(200,data,'post deleted successfully.');
        response.send(res)
    
}

//edit post:
const editpost=async(req,res)=>{
   
        let {id}=req.params;
        let record=await postModel.findById(id);
        console.log(record)
        if(!record){
            throw new ApiError(400,{},'bad request. post not found.');
        }
        let data=await postModel.findOneAndUpdate({_id:id},req.body,{new:true});
        if(!data){
         throw new ApiError(400,{},'bad request. this post found.');
        }
        let response=new ApiResponse(201,data,'post updated successfully.');
        response.send(res);
};

export  {getpost,addpost,deletepost,editpost};