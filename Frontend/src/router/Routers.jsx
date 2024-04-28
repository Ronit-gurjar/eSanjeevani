import React from 'react'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Signin from '../Pages/SignIn'
import Appointment from '../Pages/Appointment'
import UserProfile from '../Pages/UserProfile'
import VirtualAssistent from '../Pages/VirtualAssistent'
import Room from '../Pages/Room'
import About from '../Pages/About'

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
      <Route path='/userprofile' element={<UserProfile/>} />
      <Route path='/virassistent' element={<VirtualAssistent/>} />
      <Route path="/room/:roomId" element={<Room />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}
