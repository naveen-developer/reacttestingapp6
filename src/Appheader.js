import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Avatar from "@mui/material/Avatar";
import data from "./data";

const Appheader = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="app__header_mobileview">
        <CameraAltOutlinedIcon />
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
        />
        <MapsUgcOutlinedIcon />
      </div>
      <div className="app__footer_mobileview">
        <HomeIcon />
        <CameraAltOutlinedIcon />
        <AddBoxOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src={data[0].picture}
        />
      </div>
      <div className="app__headerImage">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
        />
        <div className="app__headerInput">
          <span>
            <SearchIcon />
          </span>
          <input
            className="app__searchinput"
            type="text"
            placeholder="Search users...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="app__headerLinks">
          <Link to="/signin">Signin</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/createpost">Create Post</Link>
        </div>
      </div>
    </>
  );
};

export default Appheader;
