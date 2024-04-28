import React from 'react'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'


import {Routes , Route} from 'react-router-dom'



export default function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/*' element={<Home/>}/>
      <Route path='/register' element={<Signup/>} />
    </Routes>
  )
}
