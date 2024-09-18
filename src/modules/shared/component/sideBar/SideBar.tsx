import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useState(true);

  const getMenuItemClassName = (path: string) => {
    return location.pathname === path
      ? 'ps-menu-button active'
      : 'ps-menu-button';
  };

  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsCollapse(false);
      } else {
        setIsCollapse(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Stack
      sx={{
        position: 'sticky',
        top: 0,
        bottom: 0,
        display: 'flex',
        height: '100vh',
      }}
      className="sidebar-container"
    >
      <Sidebar collapsed={isCollapse}>
        {/* {isCollapse ? (
          ''
        ) : (
          <Stack
            direction="row"
            onClick={toggleCollapse}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              paddingBlock: '1rem',
            }}
          >
            <ArrowBackIosIcon
              sx={{
                color: 'black',
                backgroundColor: 'red',
                paddingBlock: '.5rem',
                borderEndStartRadius:".3rem"
              }}
            />
          </Stack>
        )} */}
        <Menu onClick={toggleCollapse}>
          <MenuItem
            icon={<HomeIcon />}
            component={<Link to="/layout-Master" />}
            className={getMenuItemClassName('/dashboard')}
          >
            Home
          </MenuItem>

          <MenuItem
            icon={<GroupIcon />}
            component={<Link to="/layout-Master" />}
            className={getMenuItemClassName('/layout-Master')}
          >
            Users
          </MenuItem>

          <MenuItem
            icon={<DashboardIcon />}
            component={<Link to="/layout-Master" />}
            className={getMenuItemClassName('/layout-Master')}
          >
            Rooms
          </MenuItem>

          <MenuItem
            icon={<CalendarTodayIcon />}
            component={<Link to="/layout-Master" />}
            className={getMenuItemClassName('/layout-Master')}
          >
            Ads
          </MenuItem>

          <MenuItem
            icon={<EventAvailableIcon />}
            component={<Link to="/layout-Master" />}
            className={getMenuItemClassName('/layout-Master')}
          >
            Bookings
          </MenuItem>

          <MenuItem
            icon={<BedroomChildIcon />}
            component={<Link to="/layout-Master/facility-list" />}
            className={getMenuItemClassName('/layout-Master/facility-list')}
          >
            Facilities
          </MenuItem>

          <MenuItem
            icon={<LockOpenIcon />}
            component={<Link to="/layout-Master" />}
            className={getMenuItemClassName('/layout-Master')}
          >
            Change Password
          </MenuItem>

          <MenuItem
            onClick={() => {
              localStorage.removeItem('userToken');
              //navigate('/login');
            }}
            icon={<ChevronRightIcon />}
            className="ps-menu-button"
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </Stack>
  );
}
