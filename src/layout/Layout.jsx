import React from 'react'
import Routers from '../router/Routers'
import Navbar from '../components/navbar'

const Layout = () => {
  return (
   <>
   <Navbar />
   <main>
        <Routers />
    </main>
   </>
  )
}

export default Layout