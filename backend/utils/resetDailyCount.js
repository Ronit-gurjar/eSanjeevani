const cron = require('node-cron');
const Doctor = require("../models/DoctorSchema")

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