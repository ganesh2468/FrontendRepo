import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate = useNavigate();
        const login = () => {
        localStorage.setItem("login", true);
          navigate("/");
        };
      
        useEffect(() => {
          let login = localStorage.getItem("login");
          if (login==="true") {
            navigate("/");
          }
        },[]);
  return (
    <div className="container main-container">
	<div className="login-box">
		<div className="header">
			<h2>Login Page</h2>
		</div>
		<div className="login">
			<div className="form-control1">
				<input type="text" placeholder="user name" className="tbox"  />
			</div>
			<div className="form-control1">
				<input type="password" placeholder="password" className="tbox"  />
			</div>
			<div className="form-control1">
                <button className="btn" onClick={login}>Login</button>
			</div>
		</div>
	</div>
  </div>
  )
}

export default Login