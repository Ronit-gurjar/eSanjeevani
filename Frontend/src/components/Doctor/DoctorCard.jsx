import React from 'react'
import PropTypes from 'prop-types'

const DoctorCardTypes = {
    image: PropTypes.node,
    name : PropTypes.string,
    rating: PropTypes.number,
    address: PropTypes.string
}

const DoctorCard = ({image, name, rating, address}) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
         <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{rating}</p>
        <p>{address}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Virtual Call</button>
        </div>
        </div>
    </div>
  )
}

DoctorCard.propTypes = DoctorCardTypes
export default DoctorCard