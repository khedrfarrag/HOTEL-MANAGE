import React from 'react';
import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';
import { SelectChangeEvent } from '@mui/material/Select';
import Style from '../../sass/Landingpage.module.css';

export default function Navbar() {
  // <<<<<<<<<<<<<<<<<<<<<<handle select Nav >>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid size={{ md: 12, sm: 12, xs: 12 }}>
          <Stack
            sx={{
              height: '60px',
              justifyContent: 'space-around',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h6" className={Style.Herohead}>
                <span className={Style.mainheader}>Stay</span>cation.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                marginLeft: 50,
                alignItems: 'center',
              }}
            >
              <Link to={'/'}>Home</Link>
              <Link to={'/Explore'}>Explore</Link>
              <Link to={'/Reviews'}>Reviews</Link>
              <Link to={'/Favorites'}>Favorites</Link>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <span>use Name</span>
            </Stack>
          </Stack>
          <Stack className={Style.borderNav}></Stack>
        </Grid>
      </Box>
    </>
  );
}
