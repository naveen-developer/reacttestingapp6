import React from "react";
import "./Signup.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup__div">
      <div className="signup__formdiv">
        <div className="signup__imagediv">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="instagram logo"
            width="50%"
          />
        </div>
        <div className="signup__header_text">
          <p>Sign up to see photos and videos from your friends.</p>
        </div>
        <div className="signup__inputdiv_button">
          <button>
            {" "}
            <span>
              <FacebookIcon />
            </span>
            Login with facebook
          </button>
        </div>

        <div className="signup__hrline">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className="signup__inputdiv">
          <input type="text" placeholder="mobile number or email" />
          <input type="text" placeholder="Fullname" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="password" />
          <button disabled>Sign up</button>
        </div>

        <div>
          <div className="signup__text1">
            <p>
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </p>
          </div>
        </div>
      </div>
      <div className="signup__formdiv1">
        Have an account?
        <Link to="/signin">Log in</Link>
      </div>
    </div>
  );
};

export default Signup;
