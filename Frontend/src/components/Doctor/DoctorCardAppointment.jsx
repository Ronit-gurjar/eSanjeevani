import React from 'react'
import PropTypes from 'prop-types'

const DoctorCardAppTypes = {
    id: PropTypes.string,
    image: PropTypes.node,
    name : PropTypes.string,
    rating: PropTypes.number,
    special: PropTypes.string
}

const DoctorCardAppointment = ({id, image, name, rating, special}) => {
    const Imagestyle = {
        borderradius:'50%'
    }

  return (
    <div className='card w-72 bg-white shadow-xl text-black flex flex-row gap-8'>
        <figure><img src={image} alt="Shoes" style={Imagestyle} width={150} height={150}/></figure>
        <div className='flex flex-col'>
            <h1>{name}</h1>
            <h3>{special}</h3>
            <p>{rating}</p>
        </div>
        <div>
            <h1>800</h1>
        </div>
    </div>
  )
}

DoctorCardAppointment.propTypes = DoctorCardAppTypes
export default DoctorCardAppointment