import React from "react";
import "./Signin.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signin__div">
      <div className="signin__formdiv">
        <div className="signin__imagediv">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="instagram logo"
            width="50%"
          />
        </div>
        <div className="signin__inputdiv">
          <input type="text" placeholder="phone number, username or email" />
          <input type="text" placeholder="password" />
          <button>Log In</button>
        </div>
        <div className="signin__hrline">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div>
          <div className="signin__text">
            <span>
              <FacebookIcon style={{ color: "darkblue" }} />
            </span>
            <p>Log in with facebook</p>
          </div>
          <div className="signin__text1">
            <p>Forgot password</p>
          </div>
        </div>
      </div>
      <div className="signin__formdiv1">
        Don't have an account?
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Signin;
