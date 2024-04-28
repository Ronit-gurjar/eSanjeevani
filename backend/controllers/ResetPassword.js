const { resetPasswordLink } = require("../mail/templates/resetPasswordLink");
const Users = require("../models/UserSchema");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const Doctor = require("../models/DoctorSchema");


// resetPasswordToken jo user ko link dega k le bhai passward change kr le ---link UI li hogi
// since every user has to get unique link. Hence we use token(UUID) for that

exports.resetPasswordToken = async (req, res) => {
    try{
        // fetch email
        const {email} = req.body;
        const user = await Users.findOne({email});
        const doctor = await Doctor.findOne({email})
        if(!user || !doctor) {
            return res.status(401).json({
                success: true,
                message:"Email is not registered",
            });
        }

        // generate token and then link 
        const token = crypto.randomUUID();
        console.log(token);
        // put this token and expiry in Users MOdel

        const updatedUser = await Users.findOneAndUpdate({email: email},
            {
                token: token,
                resetPasswordToken: Date.now() + 5*60*1000,
            },
            {new : true});   // new : true return the updtaed doc


        // create link
        const url  = `http://localhost:3000/update-password/${token}`;
        // send mail
        const subject = "Password reset link";
        const body = resetPasswordLink(url);  // returns template

        await mailSender(email, subject , body); // iska bhi template bana skte hai

        return res.status(200).json({
            success: true,
            message: "Reset password email sent successfully to your mail, PLease check your email",  
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message:"Internal server error in sending reset password email",
        })
    }
}



// resetPassword in DB

exports.resetPassword = async (req,res) => {
    try
    {
        // fetch details
        const {password, confirmPassword, token} = req.body; // ye token yaha kese aaya---> frontend dalega

        // validate
        if(password!==confirmPassword) {
            return res.status(401).json({
                success: false,
                message:"Password not matched, Please enter correct password",
            });
        }

        const user = await Users.findOne({token: token}); // jo abhi upr daala hai
        if(!user) {
            return res.status(401).json({
                success: false,
                message:"Token is invalid",
            });
        }

        //we have user ----> means token hai
        // expiry check

        if(user.resetPasswordExpiry < Date.now()) {
            return res.status(401).json({
                success: false,
                message:"Token expires, Please regenerate your token",
            });
        }

        // password hash
         let hashPassword = await bcrypt.hash(password,10);

         // update password
         user.password=hashPassword;
        // save in DB
        await user.save();


        return res.status(200).json({
            success: true,
            message: "Password reset successfully",
        })
        
    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message:"Internal server error in reset password.",
        })
    }
}
