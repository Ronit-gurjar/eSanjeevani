import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            require: true,
        },
       
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
       
        photo: {
            type: String,
        },
        
        role: {
            type: String,
            enum: ["patient" , "doctor"],
            default: "patient",
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"],
            default: "male",
        },
       
        appointments: {
            type: mongoose.Types.ObjectId,
            ref: "Appointment"
        },

        additionalDetails :{
            type: mongoose.Types.ObjectId,
            ref:"UserProfile"
        },
        // for reset Password
        token: {
            type: String,
        },
        resetPasswordExpiry: {
            type: Date,
        },
        ambulance: {
            type: mongoose.Types.ObjectId,
            default: null,
        }
    }
);

export default mongoose.model("User", UserSchema);