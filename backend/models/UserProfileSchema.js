import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
{

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

    bloodGroup: {
        type: String,
    },

    phone: {
    type: Number,
    }

}   
);

export default mongoose.model("UserProfile", userProfileSchema);




