import React from 'react'
import PropTypes from 'prop-types'

const UserPropTypes = {
    image: PropTypes.node,
    name: PropTypes.string,
  };

const Profile = ({ image, name }) => {

    const Imagestyle = {
        borderradius:'50%'
    }

  return (
    <div>
        <h1 className='text-3xl font-bold'>PROFILE</h1>
        <img src={image} alt="user profile" width={300} height={300} style={Imagestyle}/>
        <h3 className='text-xl'>{name}</h3>
    </div>
  )
}

Profile.propTypes = UserPropTypes;

export default Profile