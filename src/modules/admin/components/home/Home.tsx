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
import { PieValueType } from '@mui/x-charts/models/seriesType/pie';
export default function Home() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<charts using >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [highlightedItem, setHighLightedItem] =
    React.useState<HighlightItemData | null>(null);
  type Typecharts = {
    data: {
      rooms: number;
      facilities: number;
      ads: number;
    };
    bookings: {
      completed: PieValueType;
      pending: PieValueType;
    };
    users: {
      user: PieValueType;
      admin: PieValueType;
    };
  };

  const [Datacharts, setDatacharts] = useState<Typecharts>();
  const getDashbord = React.useCallback(async () => {
    try {
      const response = await axios.get<Typecharts>(ADMIN_Dashboard_URL.Charts, {
        headers: {
          Authorization: `Bearer${localStorage.getItem('userToken')}`,
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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
                    end={Datacharts?.data.facilities}
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
                    end={Datacharts?.data.ads}
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
          <Stack width={{ md: '50%', xs: '100%' }}>
            {Datacharts && (
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: Datacharts?.bookings?.completed?.id,
                        value: Datacharts?.bookings?.completed?.value,
                        label: Datacharts?.bookings?.completed?.label,
                      },

                      {
                        id: Datacharts.bookings?.pending?.id,
                        value: Datacharts?.bookings?.pending?.value,
                        label: Datacharts?.bookings?.pending?.label,
                      },
                    ],
                  },
                ]}
                width={500}
                height={200}
              />
            )}
          </Stack>
          <Stack
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
          {/* {data} */}
          <Stack></Stack>
        </Grade>
      </Box>
    </>
  );
}

const barChartsProps: BarChartProps = {
  series: [
    {
      data: [3, 4, 1, 6, 5],
      id: 'sync',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{ scaleType: 'band', data: ['A', 'B', 'C', 'D', 'E'] }],
  height: 300,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};

const pieChartProps: PieChartProps = {
  series: [
    {
      id: 'sync',
      data: [
        { value: 3, label: 'A', id: 'A' },
        { value: 4, label: 'B', id: 'B' },
        { value: 1, label: 'C', id: 'C' },
        { value: 6, label: 'D', id: 'D' },
        { value: 5, label: 'E', id: 'E' },
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
