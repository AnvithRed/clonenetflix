import "./login.css";
import { Outlet, Link } from "react-router-dom";


export default function Login() {
  
  return (
    <nav>
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button >
        <div >
            <Link className="loginbutton" to="/home">Sign In</Link>
          </div>
         
          </button>

          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
           
        </form>

      </div>
    </div>
    <Outlet />
    </nav>
     
  );
}