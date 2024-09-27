import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import imag from '../img/image 3.svg';
import Style from '../../sass/Landingpage.module.css';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { motion } from 'framer-motion';
// import { formatDate } from '../../../../../Hooks/formatDate/formatDate';
import DatePickerValue from '../SelectDate/Pickdate';

export default function StartBoking() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid sx={{ display: 'flex' }} container>
          <Grid size={{ md: 6, sm: 12, xs: 12 }} container>
            <Stack sx={{ flex: 1 }}>
              <Stack sx={{ width: '70%', marginTop: '10px' }}>
                <Typography variant="h3" fontWeight={600}>
                  Forget Busy Work, Start Next Vacation
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'gray' }}>
                  We provide what you need to enjoy your holiday with family.
                  Time to make another memorable moments.
                </Typography>
                <Stack sx={{ marginTop: '50px' }}>
                  <Typography variant="h6">Start Booking</Typography>
                  <Typography variant="caption" fontWeight={400}>
                    {' '}
                    Pick a Date
                  </Typography>
                </Stack>
                <Stack>
                  <DatePickerValue />
                </Stack>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  marginTop={'50px'}
                >
                  Capacity
                </Typography>
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                  }}
                >
                  <Button variant="contained" color="error">
                    -
                  </Button>
                  <Typography variant="subtitle1"> 2 person</Typography>
                  <Button variant="contained" color="success">
                    +
                  </Button>
                </Stack>
                <Stack
                  sx={{ width: '300px', height: '100px', marginTop: '50px' }}
                >
                  <Button variant="contained" color="primary">
                    Explore
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ md: 6, sm: 12, xs: 12 }} container>
            <Stack
              sx={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Stack className={Style.mainimagboking}>
                <img src={imag} alt="img" className={Style.positionimag} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
