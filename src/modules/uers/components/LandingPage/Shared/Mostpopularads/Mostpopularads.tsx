import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect } from 'react';
import Style from '../../sass/Landingpage.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import imgs from '../img/pexels-photo-3770106.webp';
import axios, { AxiosResponse } from 'axios';
import { Portal_rooms_URL } from '../../../../../../constants/END-POINTS';

export default function Mostpopularads() {
  // "data": {
  //       "rooms": [
  //           {
  //               "_id": "66f532536475e2d50da90cbd",
  //               "roomNumber": "Room1",
  //               "price": 500,
  //               "capacity": 3,
  //               "discount": 30,
  //               "facilities": []
  //                   }]}
  type roomsvalue = {
    rooms: {
      _id: string;
      roomNumber: string;
      price: number;
      capacity: number;
      discount: number;
    }[];
  };

  type paramstype = {
    page: string;
    size: string;
    startDate: string;
    endDate: string;
  };
  // {page:"",size:"",startDate:"",endDate:""}
  // type data = rooms[];
  const [selectedDate, setSelectedDate] = React.useState();

  const [detailsrooms, setSelectrooms] = React.useState<roomsvalue>();
  const Gitallrooms = React.useCallback(
    async ({
      page = '1',
      size = '10',
      startDate = '',
      endDate = '',
    }: paramstype) => {
      try {
        const response = axios.get<roomsvalue>(Portal_rooms_URL.getAllRooms(), {
          headers: { Authorization: localStorage.getItem('token') },
          params: {
            page: page,
            size: size,
            startDate: startDate,
            endDate: endDate,
          },
        });

        setSelectrooms((await response)?.data?.rooms);
      } catch (error) {
        console.log(error);
      }
    }
  );

  useEffect(() => {
    console.log(detailsrooms);
    Gitallrooms({ page: '1', size: '10', startDate: '', endDate: '' });
  });
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          height={{ md: '100vh', sm: '150vh', xs: '150vh' }}
          size={{ md: 12, sm: 10, xs: 8 }}
        >
          <Grid size={{ md: 4, sm: 12, xs: 12 }} spacing={2}>
            <Stack className={Style.originPopular}>
              <img src={imgs} alt="" />
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
          <Grid container size={{ md: 8, sm: 12, xs: 12 }} spacing={2}>
            <Grid size={{ md: 6, sm: 4, xs: 12 }}>
              <Stack className={Style.originPopular1}>
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
            <Grid size={{ md: 6, sm: 4, xs: 3 }}>
              <Stack className={Style.originPopular2}>
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
            <Grid size={{ md: 6, sm: 4, xs: 3 }}>
              <Stack className={Style.originPopular3}>
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
            <Grid size={{ md: 6, sm: 12, xs: 3 }}>
              <Stack className={Style.originPopular4}>
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
