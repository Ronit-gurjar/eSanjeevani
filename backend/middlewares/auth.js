
const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = async(req,res,next)=>{
    try
    {
        // fecth token from req and authorize it
        const token = req.cookies.jwt || req.body.token || req.header("Authorization").replace("Bearer ","");
        console.log("Token of user: ", token);
        if(!token)
        {
            res.status(401).json({
                success:false,
                message:"Token Missing",
            });
        }
        // verify this token 
        try
        {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = payload;
            console.log("User type : ",req.user.role);

        }catch(err)
        {
            res.status(500).json({
                success:false,
                message:"Token invalid ",
            })
        }

        next();
     
    }catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal sever error in auth middleware"
        })   
    }
}

exports.isPatient = async(req,res,next)=>{
    try
    {
        if(req.user.role!=="Patient")
        {
            res.status(401).json({
                success:false,
                message:"This Page is protected for you. You are not Doctor."
            })
        }
        next();
    }catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal issue in Patient"
        })
    }
}


exports.isDoctor = async(req,res,next)=>{
    try
    {
        if(req.user.role!=="Doctor")
        {
            res.status(401).json({
                success:false,
                message:"This Page is protected for you. You are not Patient."
            })
        }
        next();
    }catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal issue in doctor"
        })
    }
}




// exports.isAdmin = async(req,res,next)=>{
//     try
//     {
//         if(req.user.accountType!=="Admin")
//         {
//             res.status(401).json({
//                 success:false,
//                 message:"This Page is protected for you. You are not Admin"
//             })
//         }
//         next();

//     }catch(err)
//     {
//         res.status(500).json({
//             success:false,
//             message:"Internal issue in Admin"
//         })
//     }
// }