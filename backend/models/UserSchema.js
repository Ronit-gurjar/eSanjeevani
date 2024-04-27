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
        phone: {
            type: Number,
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
        bloodGroup: {
            type: String
        },
        photo: {
            type: String,
        },
        address: {
            street: {
                type: String,
                required: true,
                trim: true,
            },
            city: {
                type: String,
                required: true,
                trim: true,
            },
            state: {
                type: String,
                required: true,
                trim: true,
            },
            postalCode: {
                type: String,
                required: true,
                trim: true,
            }
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
        bloodGroup: {
            type: String,
        },
        appointments: {
            type: mongoose.Types.ObjectId,
            ref: "Appointment"
        },
        
    }
);

export default mongoose.model("User", UserSchema);