// import { json } from "express";

// class ErrorHandler extends Error{
//     constructor(message,statusCode){
//         super(message);
//         this.statusCode= statusCode;
//     }
// }

// export const errorMiddleware=(err,req,res,next)=>{
//    console.message= err.message || "Internal Server Error";
//    err.statusCode= err.statusCode|| 500;
//    returnvres.status(statusCode).json({
//     success:false,

//     message: err.message,

//    });

// };

// export default ErrorHandler;