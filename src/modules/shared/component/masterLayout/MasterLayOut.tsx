import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import { Stack } from '@mui/material';

Stack;
export default function MasterLayOut() {
  return (
    <>
      {/* <NavBar /> */}
      <Stack direction="row" sx={{ display: 'flex' }}>
        <SideBar />
        <Stack sx={{ flexGrow: 1, display: 'flex' }}>
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
}
