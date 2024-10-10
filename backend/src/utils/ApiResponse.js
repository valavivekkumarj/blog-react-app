class ApiResponse {
    constructor(statusCode,payload={},message='success',isSuccess=true,errors=null){
this.statusCode=statusCode;
this.payload=payload;
this.message=message;
this.success=isSuccess;
this.errors=errors
    }
send(res){
    return res.status(this.statusCode).json({
        statusCode:this.statusCode,
        success:this.success,
        payload:this.payload,
        message:this.message,
        errors:this.errors
    })
}
}

export default ApiResponse;