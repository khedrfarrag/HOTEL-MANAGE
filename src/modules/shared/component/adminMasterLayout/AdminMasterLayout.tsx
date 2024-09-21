import React from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function AdminMasterLayout() {
  return (
    <>
      <Stack direction="row" sx={{ display: 'flex' }}>
        <SideBar />
        <Stack sx={{ flexGrow: 1, display: 'flex', px: { xs: 1, sm: 2 } }}>
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
}
