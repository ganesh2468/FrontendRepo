import React from "react";
import { useNavigate } from "react-router-dom";
    const Logout = () => {
        const navigate = useNavigate();
        const logout = () => {
          localStorage.clear();
          navigate("/Login");
        };
    return(
        <>
        <div><br/><br/>
            <center><h3>Logout Page</h3></center>
            <button className="btn1" onClick={logout}>Logout</button>
        </div>
        </>
    );
}
export default Logout;