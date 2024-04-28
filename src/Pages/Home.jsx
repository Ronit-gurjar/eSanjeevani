import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appointment');
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Make Appointment
      </button>
    </div>
  );
};

export default Home;
