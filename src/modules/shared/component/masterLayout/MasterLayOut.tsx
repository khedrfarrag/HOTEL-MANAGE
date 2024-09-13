import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';

export default function MasterLayOut() {
  return (
    <>
      <div className="d-flex">
        <div>
          <SideBar />
        </div>
        <div>
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
