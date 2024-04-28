import Profile from "../components/Navbar/Profile/Profile"
import Tillu from "../assets/images/doctor-img01.png"

const UserProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <Profile image={Tillu} name="tillu"/>
    </div>
  )
}

export default UserProfile