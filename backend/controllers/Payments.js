const  {instance} = require("../config/razorpay");
const Users = require("../models/UserSchema");
const Doctor = require("../models/DoctorSchema");
const { default: mongoose } = require("mongoose");
const mailSender = require("../utils/mailSender");

// capture Payment : order create
exports.capturePayment = async (req, res)=> {
    
    try{

        const {doctorId} = req.body;
        const userId = req.user.id;
        if(!doctorId) {
            return res.status(401).json({
                success:false,
                message:'Please provide valid Doctor ID',
            })
        };

        // ye doctor valid hai ya nahi : 

        const doctor = await Doctor.findById({_id: doctorId});
        if(!doctor) {
            return res.status(401).json({
                success:false,
                message:'Could not find the doctor',
            });
        }

        // user valid hai, doctor valid hai
        // but check user already appointment  to nahi hai doctor k saath 

        // we have course object usme studentEnrolled array me jisme userId store hai

        const uid = new mongoose.Types.ObjectId.createFromHexString(userId);
        console.log("User id from payload: ", userId);
        console.log("User id  after type OBJECTID: ", uid);

        if(doctor.patients.includes(uid)) {
            return res.status(200).json({
                success:false,
                message:'Patient is already appointed',
            });
        }

        // now its all ok 
        // create order

        const additionalDetailsOfDoctor = await getDoctorProfile.findById({_id: doctor.additionalDetails});
        if(!additionalDetailsOfDoctor){
            res.status(401).json({
                success:false,
                message: "Invalid additional details",
            })
        }


        const user = await Users.findById({_id: uid});

        var doctorFee = additionalDetailsOfDoctor.ticketPrice;
        var transportFee = 0;
        var ambFlag = user.ambulance;
        if(ambFlag == null) ambFlag = false;
        var vcFlag = additionalDetailsOfDoctor.virtualCare;
        if(user.ambulance) {
           transportFee = 66     /// api for destation calculation
        }
        else {
            transportFee = 0 ;    
        }
         

        var toatalFee = doctorFee + transportFee;

        const options = {
            amount: toatalFee,
            currency: "INR",
            receipt: Math.random(Date.now()).toString(),
            notes: {
                doctorId: doctorId,
                userId: userId,
                isAmbulance: ambFlag,
                isVirtualCare: vcFlag,
                appointmentDate: Date(Date.now()).toString(),
            }
        }

        // initiate payment using razorpay
        const paymentResponse = await instance.orders.create(options);
        console.log(paymentResponse);

        return res.status(200).json({
            success:true,
            doctorName:doctor.name,
            doctorBio:doctor.bio,
            time:doctor.timeSlots,
            assistantContact: doctor.phone,
            orderId: paymentResponse.id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount,
        });

    }catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Could not initiate order",
        });
    }
}


// verify Signature so that we update DB

exports.verifySignature = async (req, res) => {

    const webhookSecret = "12345678";
    const signature = req.header["x-razorpay-signature"]; // behaviour of razorpay

    // webhooksecret ko encryt krlo

    const shasum = crypto.createHmac("sha256",webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");


    if(signature!==digest) {
        return res.status(400).json({
            success: false,
            message: "Payment not authorized."
        })
    }

    console.log("Payment Authorized");
    // perform actions , alot doctor and and enty in user schema and doctor schema
    // patientCount++;
    // ambulance , appointment schema


    // if ambulance : schema bhi update
    // 

    const {doctorId , userId, isAmbulance ,isVirtualCare, appointmentDate} = req.body.payload.payment.entity.notes;

    try
    {
        //find doctor  and update patient
        const patientAppointed = await Doctor.findByIdAndUpdate({_id: doctorId},
            {$push:{patients : userId}},
            {new: true}
        );



        const appointment = await AppointmentSchema.create({doctor: doctorId, patient: userId, appointmentDate:appointmentDate })
        
        // patient count increases
        const doctorDetailsId = patientAppointed.additionalDetails;
        const DoctorDetails = await DoctorProfile.findByIdAndUpdate({_id: doctorDetailsId},{dailyPatientCount: dailyPatientCount++},{new : true})

    
        // find user/patient and then update course in it

        const updatedProfile = await Users.findByIdAndUpdate({_id: userId}, 
            {$push: {appointments:appointmentDate}},
            {new: true}
        );
        console.log(updatedProfile);

        //send confirmation mail to user
        const email = updatedProfile.email;
        let subject = "Congratulations from eSanjeevani";
        let doctorName = patientAppointed.name;
        let body = bookingMail(doctorName,updatedProfile.name);
        const mailResponse = mailSender(email, subject, body);

        console.log(mailResponse);

        return res.status(200).json({
            success:true,
            message:"Signature verified and Doctor Appointed"
        });

    }catch(err)
    {
        return res.status(500).json({
            success:false,
            message:'Unable to verify payment signature',
        });

    }

}

