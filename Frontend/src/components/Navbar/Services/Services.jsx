
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appointment');
  };
  const handleClickVirtualAssis = () => {
    navigate('/virassistent');
  };

  return (
   <>
   <div className=" text-gray-600">
   <div className=" max-h-full flex justify-around items-center h-fit p-32 bg-gradient-to-r from-blue-100 to-purple-300 ">
    <div className="card w-96 shadow-xl bg-white">
   <div className=" bg-green shadow-xl ">
  <figure className="px-6 pt-6">
    <img src="https://as1.ftcdn.net/v2/jpg/06/61/04/98/1000_F_661049835_fZEl0d0aZxjv0l3HahkCYNjj2uerNzfC.jpg" alt="doctors" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-black">Book appointment!</h2>
    <p>Book appointment fastly and reliable</p>
    <div className="card-actions">
      <button className="btn btn-wide bg-white hover:bg-grey-300 " onClick={handleClick}>Book now</button>
    </div>
  </div>
</div>
</div>


   <div className="flex ">
   <div className="card w-96 bg-green shadow-xl bg-white ">
  <figure className="px-6 pt-6">
    <img src="https://img.freepik.com/free-photo/closeup-african-american-doctor-greeting-his-patient-during-video-call-mobile-phone_637285-12130.jpg?w=1380&t=st=1714281079~exp=1714281679~hmac=e7341eb69e0d0da04a60a1a5aa07cf860dd99504be98535d0aa46c7d89b9d5b7" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-black">Virtual Caretaker!</h2>
    <p>Book a virtual caretaker with your phone</p>
    <div className="card-actions">
      <button className="btn btn-wide bg-white hover:bg-grey-300" onClick={handleClickVirtualAssis}>Book now</button>
    </div>
  </div>
</div>
</div>

<div className="">
   <div className="card w-96 bg-green shadow-xl bg-white">
  <figure className="px-6 pt-6">
    <img src="https://www.shutterstock.com/image-photo/doctor-600nw-558136654.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-black">Best doctors!</h2>
    <p>find the best doctors near your location</p>
    <div className="card-actions">
      <button className="btn btn-wide bg-white hover:bg-grey-300">Book now</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
   </>
  )
}

export default Services;