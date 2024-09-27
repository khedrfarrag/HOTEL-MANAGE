import Grid from '@mui/material/Grid2';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Fotter() {
  return (
    <>
      <Box>
        <Grid
          container
          width={'90%'}
          height={'300px'}
          margin={'auto'}
          marginTop={'40px'}
          spacing={5}
        >
          <Grid container size={{ md: 3, sm: 12 }} height={'100%'}>
            <Stack marginLeft={'20px'}>
              <Typography
                variant="h4"
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                gap={'1px'}
              >
                <Typography variant="h4" color="info">
                  Stay
                </Typography>
                cation.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(176, 176, 176, .8)' }}
              >
                We kaboom your beauty holiday instantly and memorable.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            container
            size={{ md: 9, sm: 12 }}
            height={'100%'}
            // marginLeft={'10px'}
          >
            <Grid size={{ md: 4, sm: 4, xs: 3 }}>
              <Stack spacing={1}>
                <Typography variant="h6" color="rgba(21, 44, 91, 1)">
                  For Beginners
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  New Account
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  Start Booking a Room
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  Use Payments
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ md: 4, sm: 4, xs: 3 }}>
              <Stack spacing={1}>
                <Typography variant="h5" color="rgba(21, 44, 91, 1)">
                  Explore Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  Our Careers
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  Privacy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  Terms & Conditions
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ md: 4, sm: 4, xs: 3 }}>
              <Stack spacing={1}>
                <Typography variant="h6" color="rgba(21, 44, 91, 1)">
                  Connect Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  support@staycation.id
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  021 - 2208 - 1996
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  Staycation, Kemang, Jakarta
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ md: 12, sm: 12, xs: 12 }}>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(176, 176, 176, .8)' }}
                >
                  Copyright 2019 • All rights reserved • Staycation
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
