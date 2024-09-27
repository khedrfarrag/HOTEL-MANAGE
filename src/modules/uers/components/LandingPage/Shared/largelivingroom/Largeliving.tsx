import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Style from '../../sass/Landingpage.module.css';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Largeliving() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Stack marginTop={'300px'}>
          <Typography variant="h4">Houses with beauty backyard</Typography>
        </Stack>
        <Grid container spacing={2} marginTop={2}>
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.item2} ${Style.items1}`}>
              <Stack className={Style.Darkhover}></Stack>
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  title 1
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
            <Stack className={`${Style.item2} ${Style.items2}`}>
              <Stack className={Style.Darkhover}></Stack>
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  title 1
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
            <Stack className={`${Style.item2} ${Style.items3}`}>
              <Stack className={Style.Darkhover}></Stack>
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  title 1
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
            <Stack className={`${Style.item2} ${Style.items4}`}>
              <Stack className={Style.Darkhover}></Stack>{' '}
              <Stack>
                <Typography variant="h6" className={` ${Style.largTitle1}`}>
                  title 1
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
