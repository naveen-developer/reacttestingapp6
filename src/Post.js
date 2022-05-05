import React, { useState } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const Post = ({ values, userdata }) => {
  // console.log(userpic);
  const [comment, setComment] = useState("");
  const [heartIcon, setHeartIcon] = useState(false);

  const showHeart = () => {
    console.log("clicked");
    setHeartIcon(true);
    setTimeout(() => {
      setHeartIcon(false);
    }, 800);
  };

  const postComment = (event) => {
    event.preventDefault();
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header_icon">
          <Avatar
            className="post__avatar"
            alt="Remy Sharp"
            src={userdata.picture}
          />
          <h3>{userdata.username}</h3>
        </div>
        <div className="Mobile_view_threedots_icon">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      <div className="post__image_div">
        <img
          className="post__image"
          src={values.image}
          alt="post"
          onDoubleClick={() => showHeart()}
        />
        <div
          className="post__image_hearIcon"
          style={
            heartIcon
              ? {
                  display: "block",
                  position: "absolute",
                  top: "40%",
                }
              : { display: "none" }
          }
        >
          <img
            width="20%"
            src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"
            alt="image1"
          />
        </div>
      </div>
      <div className="post__mobileview_div">
        <div>
          <FavoriteBorderOutlinedIcon />
          <ModeCommentOutlinedIcon />
          <SendOutlinedIcon />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon />
        </div>
      </div>
      <h4 className="post__text">
        <strong>cleverazi</strong>wow day three of live session
      </h4>
      <h5 className="post__text1">13 likse</h5>
      <h5 className="post__text2">view all 20 comments</h5>
      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
