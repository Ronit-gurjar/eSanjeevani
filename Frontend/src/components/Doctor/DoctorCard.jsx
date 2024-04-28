import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

import { IoMdCall } from "react-icons/io";

const DoctorCardTypes = {
    id: PropTypes.string,
    image: PropTypes.node,
    name : PropTypes.string,
    rating: PropTypes.number,
    address: PropTypes.string
}

const DoctorCard = ({id, image, name, rating, address}) => {
    const Imagestyle = {
        borderradius:'50%'
    }

    const navigate = useNavigate();

    const handleClick = (value) => {
        navigate(`/room/${value}`);
      };

  return (
    <div className='card w-72 bg-white shadow-xl text-black'>
         <figure><img src={image} alt="Shoes" style={Imagestyle}/></figure>
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{rating}</p>
        <p>{address}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={()=> handleClick(id)}><IoMdCall />Virtual Call</button>
        </div>
        </div>
    </div>
  )
}

DoctorCard.propTypes = DoctorCardTypes
export default DoctorCard