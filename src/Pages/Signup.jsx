import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted! Name:', name);
    // You can add your form submission logic here, like sending data to a server
  };

  return (
    <>
    </>
  );
}

export default Signup;
