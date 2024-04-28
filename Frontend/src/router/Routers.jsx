import React from 'react'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Signin from '../Pages/SignIn'
import Appointment from '../Pages/Appointment'


import {Routes , Route} from 'react-router-dom'




export default function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/*' element={<Home/>}/>
      <Route path='/register' element={<Signup/>} />
      <Route path='/login' element={<Signin/>} />
      <Route path='/appointment' element={<Appointment/>} />
    </Routes>
  )
}
