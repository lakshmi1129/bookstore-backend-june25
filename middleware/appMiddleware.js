const appMiddleware = (req,res,next)=>{
    console.log("Inside Application Middleware...");
    next()

}
module.exports = appMiddleware