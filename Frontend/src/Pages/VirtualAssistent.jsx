import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
          The Universal Declaration of Human Rights and other international
          human rights agreements underscore that bodily autonomy is a
          fundamental right. People must be able and empowered to freely and
          responsibly make decisions about their own bodies, including if, when
          and how many children to have.9 Dec 2023
        </p>
      </div>
    </>
  );
};

export default VirtualAssistent;
