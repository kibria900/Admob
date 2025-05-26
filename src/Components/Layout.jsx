// src/Components/Layout.jsx
import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Bannar from "./Bannar";

const Layout = () => {
  return (
    <>
      <NavBar />
      
        <Outlet >

        </Outlet>
      
    </>
  );
};

export default Layout;
