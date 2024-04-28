
import Routers from '../router/Routers'
import Navbar from '../components/Navbar/navbar';

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

export default Layout;