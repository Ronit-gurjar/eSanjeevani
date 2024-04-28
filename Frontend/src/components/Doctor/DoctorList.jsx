import React from 'react';
import { Button, Card, Icon } from 'daisyui';
import DoctorCard from './DoctorCard';
import doctorImg01 from '../../assets/images/doctorImg01.jpeg';
import doctorImg02 from '../../assets/images/doctorImg02.jpeg';
import doctorImg03 from '../../assets/images/doctorImg03.jpeg';
import doctorImg04 from '../../assets/images/doctorImg04.jpeg';
import doctorImg05 from '../../assets/images/doctorImg05.jpeg';
import doctorImg06 from '../../assets/images/doctorImg06.jpeg';
import doctorImg07 from '../../assets/images/doctorImg07.jpeg';
import doctorImg08 from '../../assets/images/doctorImg08.jpeg';
import doctorImg09 from '../../assets/images/doctorImg09.jpeg';
import doctorImg10 from '../../assets/images/doctorImg10.jpeg';


export const doctors = [
  {
    id: "001",
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    avgRating: 4.7,
    totalRating: 185,
    photo: doctorImg01, // Replace with your image variable name
    totalPatients: 1200,
    hospital: "Max Super Speciality Hospital, New Delhi",
  },
  {
    id: "002",
    name: "Dr. Rahul Kapoor",
    specialization: "Orthopedic Surgeon",
    avgRating: 4.9,
    totalRating: 310,
    photo: doctorImg02,
    totalPatients: 2000,
    hospital: "Apollo Hospitals, Chennai",
  },
  {
    id: "003",
    name: "Dr. Ayesha Khan",
    specialization: "Pediatrician",
    avgRating: 4.8,  
    totalRating: 245,
    photo: doctorImg03,
    totalPatients: 1650,
    hospital: "Fortis Hospital, Mumbai",
  },
  {
    id: "004",
    name: "Dr. Mahesh Patel",
    specialization: "Ophthalmologist",
    avgRating: 4.6,
    totalRating: 220,
    photo: doctorImg04, // Add image variables for remaining doctors
    totalPatients: 1400,
    hospital: "Lilavati Hospital and Research Centre, Mumbai",
  },
  {
    id: "005",
    name: "Dr. Brinda Mehta",
    specialization: "Dermatologist",
    avgRating: 4.8,
    totalRating: 280,
    photo: doctorImg05,
    totalPatients: 1750,
    hospital: "Wockhardt Hospitals, Mumbai",
  },
  {
    id: "006",
    name: "Dr. Vijay Singh",
    specialization: "Neurologist",
    avgRating: 4.5,
    totalRating: 190,
    photo: doctorImg06,
    totalPatients: 1050,
    hospital: "Medanta - The Medicity, Gurgaon",
  },
  {
    id: "007",
    name: "Dr. Sunita Joshi",
    specialization: "Gynecologist",
    avgRating: 4.7,
    totalRating: 230,
    photo: doctorImg07,
    totalPatients: 1500,
    hospital: "Sir Ganga Ram Hospital, Delhi",
  },
  {
    id: "008",
    name: "Dr. Amit Desai",
    specialization: "Pulmonologist",
    avgRating: 4.9,
    totalRating: 300,
    photo: doctorImg08,
    totalPatients: 1800,
    hospital: "Manipal Hospitals, Bengaluru",
  },
  {
    id: "009",
    name: "Dr. Kavita Das",
    specialization: "Psychiatrist",
    avgRating: 4.6,
    totalRating: 215,
    photo: doctorImg09,
    totalPatients: 1350,
    hospital: "NIMHANS (National Institute of Mental Health and Neurosciences), Bengaluru",
  },
  {
    id: "010",
    name: "Dr. Rajeev Kumar",
    specialization: "Endocrinologist",
    avgRating: 4.8,
    totalRating: 270,
    photo: doctorImg10,
    totalPatients: 1600,
    hospital: "CMC Vellore (Christian Medical College), Vellore",
  },
];

const DoctorsList = () => {
  return (
    <div className='grid justify-center items-center m-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {doctors.map((doctor) => (
       <DoctorCard id={doctor.id} image={doctor.photo} name={doctor.name} rating={doctor.avgRating} address={doctor.hospital}/>
      ))}
    </div>
  );
};

export default DoctorsList;