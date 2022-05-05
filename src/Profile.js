import React from "react";
import "./Profile.css";
import Avatar from "@mui/material/Avatar";
import data from "./data";

const Profile = () => {
  return (
    <div>
      <div className="Profile__header">
        <div className="Profile__left">
          <Avatar
            sx={{ width: 156, height: 156 }}
            className="profile__avatar"
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/2597979/pexels-photo-2597979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="profile__right">
          <h1>mr_naveen_143</h1>
          <div className="profile__text">
            <p>36 posts</p>
            <p>142 followers</p>
            <p>125 followings</p>
          </div>
          <p>Naveen Lagishetty</p>
        </div>
      </div>

      <hr />

      {/* Mobile view posts */}
      <div className="profile__postsmain_mobileview">
        {data[0].posts.map((values, index) => {
          return (
            <div key={index} className="profile__profilepost_mobileview">
              <img src={values.image} alt="vijay" width="100%" />
            </div>
          );
        })}
      </div>
      {/* web view posts */}
      <div className="profile__postsmain">
        {data[0].posts.map((values, index) => {
          return (
            <div key={index} className="profile__profilepost">
              <img src={values.image} alt="vijay" width="100%" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
