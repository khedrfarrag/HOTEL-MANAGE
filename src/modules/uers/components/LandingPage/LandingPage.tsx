import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
// import Style from './sass/Landingpage.module.css';

import Navbar from './Shared/Navbar/Navbar';
import StartBoking from './Shared/StartBoking/StartBoking';
import Mostpopularads from './Shared/Mostpopularads/Mostpopularads';
import Housesbackyard from './Shared/Housesbackyard/Housesbackyard';
import Largeliving from './Shared/largelivingroom/Largeliving';
import Ads from './Shared/Ads/Ads';
import Reviews from './Shared/Reviews/Reviews';
import motion from 'framer-motion';
export default function LandingPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Grid container spacing={5} margin={5}>
          <Grid size={{ md: 12, sm: 12, xs: 12 }}>
            <Stack spacing={5}>
              <StartBoking />
              <Stack>
                <Typography variant="body1">Most popular ads</Typography>
              </Stack>
              <Mostpopularads />
              <Housesbackyard />
              <Largeliving />
              <Ads />
              <Reviews />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
