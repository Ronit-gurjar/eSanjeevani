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
    qualification: {
        type: Array,
    },
    bio: {
        type: String,
        maxLength: 50,
    },
    specialization: {
        type: String,
        required: true,
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
    phone: {
        type: Number,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    timing : {
        type : String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/
    },
    patientCapacity: {
        type: Number,
        required: true,
    },
    dailyPatientCount: {
        type: Number,
        default: 0, // Default value is 0 for the beginning of each day
    },
    role: {
        type: String,
    },

    // Fields for Doctors only 
    
    experiences: {
        type: Array,
    },
    
    about: {
        type: String,
    },
    timeSlots: {
        type: Array,
    },
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
});

doctorSchema.methods.resetDailyPatientCount = function() {
    this.dailyPatientCount = 0;
    return this.save();
};





// Schedule the daily reset task to run at midnight every day
{/* <minute> <hour> <day of month> <month> <day of week></day> */}

cron.schedule('0 0 * * *', async () => {
    try {
        // Find all doctors and reset their daily patient count
        const doctors = await Doctor.find({});
        for (const doctor of doctors) {
            await doctor.resetDailyPatientCount();
        }
        console.log('Daily patient count reset for all doctors');
    } catch (error) {
        console.error('Error resetting daily patient count:', error);
    }
});


export default mongoose.model("Doctor", DoctorSchema);