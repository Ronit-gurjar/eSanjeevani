import mongoose, { mongo } from "mongoose";

const AmbulanceSchema = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    driverName : {
        type : String,
        required: true

    },
    driveNumber : {
        type: Number,
        required: true,
    },
    ambulanceNumber: {
        type: String,
        require: true,
    },
    nurseName: {
        type: String,
        required: true,     
    },
    nurseNumber: {
        type: Number,
        required: true,
    },
    
}
);

export default mongoose.model("Ambulance", AmbulanceSchema);