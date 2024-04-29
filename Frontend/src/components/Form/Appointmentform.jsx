import React from 'react'
import AppointyList from '../Doctor/AppointyList'

const Appointmentform = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-fit p-8 flex flex-col justify-between gap-10'>
        <h1 className='text-4xl'>Personal Information</h1>
        <div className='border-4 p-4 rounded-2xl'>
        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Name" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
        <input type="number" className="grow" placeholder="Age" />
        </label>

        <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Gender</option>
            <option>Male</option>
            <option>Female</option>
        </select>

        <label className="input input-bordered flex items-center gap-2">
        <input type="tel" className="grow" placeholder='phone number' />
        </label>

        <textarea className="textarea textarea-bordered" placeholder="problem Description"></textarea>
        </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>Select a Doctor</h1>
            <AppointyList/>
        </div>
        
        <div></div>
    </div>
  )
}

export default Appointmentform