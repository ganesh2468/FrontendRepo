import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  return (
    <div>
      <center><h1>Logout</h1>
      <button onClick={logout} className="btn">Logout</button>
      </center>
    </div>
  );
};
