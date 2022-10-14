import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
    return(
        <>
        <div><br/><br/>
            <center><h1>Login Page</h1>
            <h2>Username</h2>
            <input type="text"></input>
            <h2>Password</h2>
            <input type="text"></input>
            <br />
            <br />
            <button onClick={login} className="btn">Login</button>
        </center>
        </div>
        </>
    );
}
export default Login;