import React, { useEffect, useState } from 'react';
import Styled from './sass/Home.module.scss';
import Grade from '@mui/material/Grid2';
import { Box, Stack, Typography } from '@mui/material';
import icon from './img/icons.svg';
import { HighlightItemData } from '@mui/x-charts/context';
import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
import { PieChart, PieChartProps } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { ADMIN_Dashboard_URL } from '../../../../constants/END-POINTS';
import CountUp from 'react-countup';
type Typecharts = {
  data: {
    rooms: number;
    facilities: number;
    ads: number;
    bookings: {
      completed: string;
      pending: string;
    };
    users: {
      user: number;
      admin: number;
    };
  };
};

export default function Home() {
  const [Datacharts, setDatacharts] = useState<Typecharts>();
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<charts using >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [highlightedItem, setHighLightedItem] =
    React.useState<HighlightItemData | null>(null);

  const getDashbord = React.useCallback(async () => {
    try {
      const response = await axios.get<Typecharts>(ADMIN_Dashboard_URL.Charts, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      setDatacharts(response?.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getDashbord();
  }, [getDashbord]);
  //<<<<<<<<<<<<<<<<<<<<<<<<<this func to charts Users >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const barChartsProps: BarChartProps = {
    series: [
      {
        data: [+Datacharts?.data?.users?.user, +Datacharts?.data?.users?.admin],
        id: 'sync',
        highlightScope: { highlight: 'item', fade: 'global' },
      },
    ],
    xAxis: [{ scaleType: 'band', data: ['user', 'admin'] }],
    height: 300,
    slotProps: {
      legend: {
        hidden: true,
      },
    },
  };
  //<<<<<<<<<<<<<<<<<<<<<<<<<this func to charts Users >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const pieChartProps: PieChartProps = {
    series: [
      {
        id: 'sync',
        data: [
          { value: Datacharts?.data.users.user, label: 'user', id: 'user' },
          { value: Datacharts?.data.users.admin, label: 'admin', id: 'admin' },
        ],
        highlightScope: { highlight: 'item', fade: 'global' },
      },
    ],
    height: 300,
    slotProps: {
      legend: {
        hidden: true,
      },
    },
  };

  //<<<<<<<<<<<<<<<<<<<<<<<<<End func charts Users >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={Styled.Contaner}>
        <Grade
          width={'80%'}
          height={'140px'}
          margin={'auto'}
          container
          spacing={{ xs: 2, md: 20 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {Array.from(Array(3)).map((_, index) => ( */}
          <Grade
            container
            className={Styled.Rooms}
            // key={index}
            size={{ md: 4, sm: 8, xs: 12 }}
            borderRadius={3}
            border={'1px solid greenyellow'}
            bgcolor={'black'}
            color={'white'}
          >
            <Stack
              width={'90%'}
              margin={'auto'}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              marginTop={3}
            >
              <Stack spacing={0} direction={'column'}>
                <Typography variant="h4" fontWeight={400}>
                  <CountUp
                    delay={1.8}
                    end={Datacharts?.data?.rooms}
                    duration={2.8}
                  />
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  Rooms
                </Typography>
              </Stack>
              <Stack>
                <img src={icon} alt="" />
              </Stack>
            </Stack>
          </Grade>

          {/*  */}

          <Grade
            container
            className={Styled.facilities}
            // key={index}
            size={{ md: 4, sm: 8, xs: 12 }}
            borderRadius={3}
            border={'1px solid greenyellow'}
            bgcolor={'black'}
            color={'white'}
          >
            <Stack
              width={'90%'}
              margin={'auto'}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              marginTop={3}
            >
              <Stack spacing={0} direction={'column'}>
                <Typography variant="h4" fontWeight={400}>
                  <CountUp
                    delay={1.8}
                    end={Datacharts?.data?.facilities}
                    duration={2.8}
                  />
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  Facilities
                </Typography>
              </Stack>
              <Stack>
                <img src={icon} alt="" />
              </Stack>
            </Stack>
          </Grade>
          {/*  */}
          <Grade
            container
            className={Styled.ads}
            // key={index}
            size={{ md: 4, sm: 8, xs: 12 }}
            borderRadius={3}
            border={'1px solid greenyellow'}
            bgcolor={'black'}
            color={'white'}
          >
            <Stack
              width={'90%'}
              margin={'auto'}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              marginTop={3}
            >
              <Stack spacing={0} direction={'column'}>
                <Typography variant="h4" fontWeight={400}>
                  <CountUp
                    delay={1.8}
                    end={Datacharts?.data?.ads}
                    duration={2.8}
                  />
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  Ads
                </Typography>
              </Stack>
              <Stack>
                <img src={icon} alt="" />
              </Stack>
            </Stack>
          </Grade>
          {/* ))} */}
        </Grade>

        <Grade
          width={'100%'}
          marginTop={{ md: 15, sm: 25, xs: 25 }}
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 4, md: 12 }}
          direction={{ sm: 'row', xs: 'row', md: 'row' }}
          justifyContent={'space-between'}
        >
          <Stack width={{ md: '50%', xs: '100%' }} className={Styled.bookings}>
            {Datacharts && (
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: +Datacharts?.data?.bookings.completed,
                        label: 'completed',
                      },
                      {
                        id: 1,
                        value: +Datacharts?.data?.bookings.pending,
                        label: 'pending',
                      },
                    ],
                  },
                ]}
                width={500}
                height={200}
              />
            )}
          </Stack>
          {Datacharts && (
            <Stack
              className={Styled.Users}
              direction={{ xs: 'row', md: 'row' }}
              spacing={1}
              marginTop={10}
              width={{ md: '45%', xs: '100%', sm: '100%' }}
            >
              <BarChart
                {...barChartsProps}
                highlightedItem={highlightedItem}
                onHighlightChange={setHighLightedItem}
              />
              <PieChart
                {...pieChartProps}
                highlightedItem={highlightedItem}
                onHighlightChange={setHighLightedItem}
              />
            </Stack>
          )}
        </Grade>
      </Box>
    </>
  );
}
