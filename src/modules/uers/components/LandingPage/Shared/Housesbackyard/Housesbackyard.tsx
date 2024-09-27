import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import Style from '../../sass/Landingpage.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Housesbackyard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Stack marginTop={'10px'}>
          <Typography variant="h4">Houses with beauty backyard</Typography>
        </Stack>
        <Grid container spacing={2} className={Style.contanermain}>
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.item} ${Style.main1}`}>
              <Stack className={Style.Darkhover}></Stack>
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  title test
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.largIcons1}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.largButtnTitle1}`}>
                <Typography variant="h6">PS Wood </Typography>
                <Typography variant="caption">Depok, Indonesia </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.item} ${Style.main2}`}>
              <Stack className={Style.Darkhover}></Stack>
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  test{' '}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.largIcons1}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.largButtnTitle1}`}>
                <Typography variant="h6">PS Wood </Typography>
                <Typography variant="caption">Depok, Indonesia </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.item} ${Style.main3}`}>
              <Stack className={Style.Darkhover}></Stack>
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  test{' '}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.largIcons1}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.largButtnTitle1}`}>
                <Typography variant="h6">PS Wood </Typography>
                <Typography variant="caption">Depok, Indonesia </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.item} ${Style.main4}`}>
              <Stack className={Style.Darkhover}></Stack>
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  test{' '}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.largIcons1}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.largButtnTitle1}`}>
                <Typography variant="h6">PS Wood </Typography>
                <Typography variant="caption">Depok, Indonesia </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
