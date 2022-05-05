import "./App.css";
import React from "react";
import Post from "./Post";
import Avatar from "@mui/material/Avatar";
import data from "./data";

function App() {
  return (
    <div className="app">
      <div className="app__posts">
        <div className="app__posts_left">
          {data[0].posts.map((values, index) => {
            return <Post key={index} values={values} userdata={data[0]} />;
          })}
        </div>
        <div className="app__posts_right">
          <div className="app__posts_right__header">
            <Avatar
              className="post__avatar"
              alt="Remy Sharp"
              src={data[0].picture}
            />
            <div>
              <p>
                <strong>mr_naveen_143</strong>
              </p>
              <p>Naveen Lagishetty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
