import mongoose, { Schema, mongo } from "mongoose";
const cron = require('node-cron');


const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
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
   
    // Fields for Doctors only 
 
    reviews: {
        type: mongoose.Types.ObjectId, 
        ref: "Review",
    },
    averageRating: {
        type: Number,
        default: 0,
    },
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
    patients:[{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    additionalDetails: {
        type: mongoose.Types.ObjectId,
        ref:"DoctorProfile"
    }

});


export default mongoose.model("Doctor", DoctorSchema);
