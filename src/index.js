import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Appheader from "./Appheader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Profile from "./Profile";
import Createpost from "./Createpost";
import Nomatch from "./Nomatch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Appheader />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />}>
        <Route path="profile" element={<Profile />} />
        <Route path="createpost" element={<Createpost />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="createpost" element={<Createpost />} />

      <Route path="*" element={<Nomatch />} />
    </Routes>
  </BrowserRouter>
);
