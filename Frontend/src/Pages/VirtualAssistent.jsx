import DoctorsList from "../components/Doctor/DoctorList";

const VirtualAssistent = () => {

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-mono">Get 1-on-1 with Specialists</h1>
      </div>
      <DoctorsList/>
    </>
  );
};

export default VirtualAssistent;
