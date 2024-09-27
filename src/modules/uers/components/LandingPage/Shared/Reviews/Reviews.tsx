import { Box, Button, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import Style from '../../sass/Landingpage.module.css';
import imgreview from '../img/image 3(2).svg';
import StarIcon from '@mui/icons-material/Star';
import Navigateleft from '../img/Navigateleft.svg';
import Navigateright from '../img/Navigateright.svg';
export default function Reviews() {
  const value = 2.5;
  //   const labels: { [index: string]: string } = {
  //     0.5: 'Useless',
  //     1: 'Useless+',
  //     1.5: 'Poor',
  //     2: 'Poor+',
  //     2.5: 'Ok',
  //     3: 'Ok+',
  //     3.5: 'Good',
  //     4: 'Good+',
  //     4.5: 'Excellent',
  //     5: 'Excellent+',
  //   };
  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container>
          <Grid size={{ md: 4, sm: 4, xs: 12 }} sx={{ height: '80vh' }}>
            <Stack className={Style.contanerimgSilder}>
              <img
                src={imgreview}
                alt="img-review"
                className={Style.imgreview}
              />
            </Stack>
          </Grid>
          <Grid size={{ md: 8, sm: 8, xs: 10 }} sx={{ height: '80vh' }}>
            <Stack className={Style.contanerReviews}>
              <Stack className={Style.contanercoption}>
                <Typography variant="h4" className={Style.titleReviews}>
                  Happy Family
                </Typography>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Typography variant="h4" className={Style.textReviews}>
                  What a great trip with my family and I should try again next
                  time soon ...
                </Typography>
                <Typography variant="caption" className={Style.textcaption}>
                  Angga, Product Designer
                </Typography>
              </Stack>
              <Stack
                className={Style.ButtnReviews}
                sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}
              >
                <img src={Navigateleft} alt="navigate" />

                <img src={Navigateright} alt="navigate" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
