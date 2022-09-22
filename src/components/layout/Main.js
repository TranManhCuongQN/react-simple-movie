import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <Fragment>
      <Header />
      {/* Outlet này là những cái mà chúng ta sẽ nested ở bên trong Main (cùng path chỉ chấp nhận 1 cái thôi)*/}
      <Outlet />
    </Fragment>
  );
};

export default Main;
