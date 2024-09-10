import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";

export default function MasterLayOut() {
  return (
    <>
      <div>
        <div></div>
        <div>
          <SideBar />
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
