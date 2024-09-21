import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Stack } from '@mui/material';
import Style from './sass/Sidbar.module.css';
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
    <Stack className={Style.contaner}>
      <Sidebar collapsed={isCollapse} className={Style.Sidebar}>
        <Menu onClick={toggleCollapse} className={Style.mainMenu}>
          <Stack spacing={2}>
            <MenuItem
              icon={<HomeIcon />}
              component={<Link to="/dashBaord" />}
              className={getMenuItemClassName('/dashBaord/home')}
            >
              Home
            </MenuItem>

            <MenuItem
              icon={<GroupIcon />}
              component={<Link to="users-List" />}
              className={getMenuItemClassName('/dashBaord/users-List')}
            >
              Users
            </MenuItem>

            <MenuItem
              icon={<DashboardIcon />}
              component={<Link to="room-list" />}
              className={getMenuItemClassName('/dashBaord/room-list')}
            >
              Rooms
            </MenuItem>

            <MenuItem
              icon={<CalendarTodayIcon />}
              component={<Link to="ads" />}
              className={getMenuItemClassName('/dashBaord/ads')}
            >
              Ads
            </MenuItem>

            <MenuItem
              icon={<EventAvailableIcon />}
              component={<Link to="booking" />}
              className={getMenuItemClassName('/dashBaord/booking')}
            >
              Bookings
            </MenuItem>

            <MenuItem
              icon={<BedroomChildIcon />}
              component={<Link to="facilities-List" />}
              className={getMenuItemClassName('/dashBaord/facilities-List')}
            >
              Facilities
            </MenuItem>

            <MenuItem
              icon={<LockOpenIcon />}
              component={<Link to="change-pass" />}
              className={getMenuItemClassName('/dashBaord/change-pass')}
            >
              Change Password
            </MenuItem>

            <MenuItem
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
              icon={<ChevronRightIcon />}
              className="ps-menu-button"
            >
              Logout
            </MenuItem>
          </Stack>
        </Menu>
      </Sidebar>
    </Stack>
  );
}
