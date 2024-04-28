import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DoctorsList from "../components/Doctor/DoctorList";

const VirtualAssistent = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(
    (e) => {
      //e.preventDefault();
      navigate(`/room/${value}`);
    },
    [navigate, value]
  );

  return (
    <>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button onClick={handleJoinRoom}>Join</button>
      </div>
      <div>
        <p>
          Choose a doctor to CAll
        </p>
        <DoctorsList/>
      </div>
    </>
  );
};

export default VirtualAssistent;
