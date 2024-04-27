import { Timestamp } from "mongodb";
import mongoose, { mongo } from "mongoose";

const bookingSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    ticketPrice: {
        type: String,
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentTime: {
        type: Timestamp,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
    isPaid: {
        type: Boolean,
        default: true,
    },
    ambulance: {
        type: mongoose.Types.ObjectId,
        ref: "Ambulance",
    }
},
    {
        timestamps: true
    }
);

export default mongoose.model("Booking", bookingSchema);