const jwt = require("jsonwebtoken")

const jwtAdminMiddleware = (req,res,next)=>{
     console.log("inside JWT Admin Middleware");

    const token = req.headers['authorization'].split(' ')[1]

    try{
         const jwtResponse = jwt.verify(token,"secretkey") 
         console.log(jwtResponse);
         req.payload = jwtResponse.userMail

         if(jwtResponse.userMail == "bookAdmin@gmail.com"){
            next()
         }else{
             res.status(401).json("invalid user....")
         }
         
    }catch(err){
        res.status(401).json("Invalid Token")
    }
}
module.exports = jwtAdminMiddleware