import ApiError from "../utils/Apierror.js";
const errorHandler=(err,req,res,next)=>{

if(err instanceof ApiError){
    const errrepsosne=err.toResponse();
    res.status(err.statusCode).json(errrepsosne);
}else{
    const statusCode=err.statusCode || 500;
    res.status(statusCode).json({
        success:false,
        message:err.message || 'internal server error.',
        errors:err.errors || null,
        stack:err.stack
    })
}
}

export default errorHandler;