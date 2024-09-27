import React, { useContext } from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { AuthContext } from '../../../../context/AuthonticationContext';
import Fotter from '../Fotter/Fotter';
import Style from './sass/UserMaster.module.css';

export default function UserMasterLayout() {
  const { userData } = useContext(AuthContext);
  // const token = localStorage.getItem('token');
  return (
    <>
      <Stack direction="row" sx={{ display: 'flex' }}>
        {userData?.role == 'admin' ? <SideBar /> : ''}
        <Stack sx={{ flexGrow: 1, display: 'flex', px: { xs: 1, sm: 2 } }}>
          <NavBar />
          <Outlet />
          <Stack className={Style.borderfooter}></Stack>
          <Fotter />
        </Stack>
      </Stack>
    </>
  );
}
