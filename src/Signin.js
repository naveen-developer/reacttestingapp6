import React from "react";
import { Outlet } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div>Signin Component</div>
      <Outlet />
    </>
  );
};

export default Signin;
