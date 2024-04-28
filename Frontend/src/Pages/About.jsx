import React from 'react'
import binary from '../assets/images/binarybrigade.jpg'

const About = () => {
  return (
    <div className='flex justify-center items-center p-6'>
        <div>
            <h1 className='text-7xl font-mono'>BINARY BRIGADE</h1>
            <ul>
                <li>Kunal Bhavare</li>
                <li>Manish Bairagi</li>
                <li>Aayush Patidar</li>
                <li>Om Govindani</li>
                <li>Ronit GUrjar</li>
            </ul>
        </div>
        <img src={binary} alt="team" />
    </div>
  )
}

export default About