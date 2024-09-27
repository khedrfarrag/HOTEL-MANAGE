import React, { useContext } from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../navBar/NavBar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { AuthContext } from '../../../../context/AuthonticationContext';

export default function AdminMasterLayout() {
  const { userData } = useContext(AuthContext);
  // const vavigate = useNavigate();

  return (
    <>
      {userData?.role == 'admin' ? (
        <Stack direction="row" sx={{ display: 'flex' }}>
          <SideBar />
          <Stack sx={{ flexGrow: 1, display: 'flex', px: { xs: 1, sm: 2 } }}>
            <Outlet />
          </Stack>
        </Stack>
      ) : (
        <Navigate to={'/'} />
      )}
    </>
  );
}
