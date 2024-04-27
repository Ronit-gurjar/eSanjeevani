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
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentTime: {
        times: TimeRanges,
        required: true,
    },
    reason: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'cancelled', 'missed'],
        default: 'scheduled',
    },
    notes: {
        type: String,
        trim: true,
    },

  },
    {
        timestamps: true
    }
);

export default mongoose.model("Appointment", AppointmentSchema);