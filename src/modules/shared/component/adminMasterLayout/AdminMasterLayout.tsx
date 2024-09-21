import React from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function AdminMasterLayout() {
  return (
    <>
      {' '}
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
