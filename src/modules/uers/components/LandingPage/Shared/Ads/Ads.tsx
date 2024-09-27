import { Box, Icon, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Style from '../../sass/Landingpage.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';

export default function Ads() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Stack marginTop={'290px'}>
          <Typography variant="h4">Houses with beauty backyard</Typography>
        </Stack>
        <Grid container spacing={2} marginTop={2}>
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.ads} ${Style.ads1}`}>
              <Stack>
                <Typography variant="h6" className={` ${Style.adsTitle1}`}>
                  title 1
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.adsIcons}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.adsButtnTitle1}`}>
                <Typography variant="h6">PS Wood </Typography>
                <Typography variant="caption">Depok, Indonesia </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* ............................................... */}
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.ads} ${Style.ads2}`}>
              <Stack>
                <Typography variant="h6" className={` ${Style.adsTitle2}`}>
                  title 1
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.adsIcons2}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.adsButtnTitle2}`}>
                <Typography variant="h6">PS Wood </Typography>
                <Typography variant="caption">Depok, Indonesia </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/*< .............................................................> */}
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.ads} ${Style.ads3}`}>
              <Stack>
                <Typography variant="h6" className={` ${Style.adsTitle3}`}>
                  title 1
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.adsIcons3}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.adsButtnTitle3}`}>
                <Typography variant="h6">PS Wood </Typography>
                <Typography variant="caption">Depok, Indonesia </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* <.........................................................................> */}
          <Grid size={{ md: 3, sm: 6, xs: 12 }}>
            <Stack className={`${Style.ads} ${Style.ads4}`}>
              <Stack>
                <Typography variant="h6" className={` ${Style.adsTitle4}`}>
                  title 1
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" className={`${Style.adsIcons4}`}>
                  <FavoriteIcon className={Style.Favoriteicons} />
                  <VisibilityIcon />
                </Typography>
              </Stack>
              <Stack className={`${Style.adsButtnTitle4}`}>
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
