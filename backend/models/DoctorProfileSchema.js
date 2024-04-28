import mongoose from "mongoose";

const doctorProfileSchema = new mongoose.Schema(
{

    qualification: {
        type: Array,
    },
    bio: {
        type: String,
        maxLength: 50,
    },
    specialization: [{
        type: String,
        required: true,
    }],
    experiences: {
        type: Array,
    },
    virtualCare : {
        type : Boolean
    },
    about: {
        type: String,
    },
    timeSlots: {
        type: Array,
    },
    phone: {
        type: Number,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    patientCapacity: {
        type: Number,
        required: true,
    },
    dailyPatientCount: {
        type: Number,
        default: 0, // Default value is 0 for the beginning of each day
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

  

}   
);



doctorProfileSchema.methods.resetDailyPatientCount = function() {
    this.dailyPatientCount = 0;
    return this.save();
};



// Schedule the daily reset task to run at midnight every day
{/* <minute> <hour> <day of month> <month> <day of week></day> */}

// BUG

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







