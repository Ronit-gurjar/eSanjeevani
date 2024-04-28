import { Timestamp } from "mongodb";
import mongoose, { mongo } from "mongoose";

const AppointmentSchema = new mongoose.Schema({

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderId: {
        type: String,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'cancelled', 'missed'],
        default: 'scheduled',
    },
  },
    {
        timestamps: true
    }
);

export default mongoose.model("Appointment", AppointmentSchema);