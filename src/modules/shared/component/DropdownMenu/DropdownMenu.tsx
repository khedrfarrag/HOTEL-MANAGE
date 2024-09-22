import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';

const DropdownMenu: React.FC = ({
  BokingList,
  handleOpenDelete,
  list,
  handleOpen,
}: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem sx={{ color: '#1976d2' }} onClick={handleClose}>
          <VisibilityOutlinedIcon color="primary" sx={{ mr: 1 }} />
          View
        </MenuItem>
        <MenuItem
          sx={{ color: '#1976d2' }}
          onClick={() => console.log('hello')}
        >
          <Link
            onClick={handleOpen}
            to={`/dashBaord/facility-edit/${list._id}`}
            state={{ listData: list, type: 'edit' }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <EditOutlinedIcon color="primary" sx={{ mr: 1 }} />
            Edit
          </Link>
        </MenuItem>
        <MenuItem sx={{ color: '#1976d2' }} onClick={handleOpenDelete}>
          <DeleteOutlinedIcon color="primary" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;
