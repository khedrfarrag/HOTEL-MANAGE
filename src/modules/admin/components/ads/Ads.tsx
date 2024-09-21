import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Styles from './sass/Ads.module.scss';
import axios from 'axios';
import { ADMIN_Ads_URL, getToken } from '../../../../constants/END-POINTS';
import { useEffect, useState } from 'react';
import LoadingPage from '../../../shared/component/loadingPage/LoadingPage';
import Modals from '../../../shared/component/modals/Modals';
import { useForm } from 'react-hook-form';

export default function Ads() {
  const [allAds, setAllAds] = useState([]);
  const [roomNumbers, setRoomNumbers] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const rows = allAds;

  //   ......................................Get All Ads
  const getAllAds = async () => {
    try {
      const response = await axios.get(
        `https://upskilling-egypt.com:3000/api/v0/admin/ads`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log(response.data.data.ads);
      setAllAds(response.data.data.ads);
      const roomNumbers = response.data.data.ads.map(
        (ad) => ad.rooms.roomNumber
      );
    } catch (error) {
      console.log(error);
    }
  };

  //   ......................................Create Ads
  const createAds = async () => {
    try {
      await axios.post(
        `https://upskilling-egypt.com:3000/api/v0/admin/ads`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log('create ads');
    } catch (error) {
      console.log(error);
    }
  };
  //   ......................................Delete Ads
  const deleteAds = async (id) => {
    try {
      const response = await axios.delete(
        ADMIN_Ads_URL.deleteAds(id),
        getToken()
      );
    } catch (error) {
      console.log(error);
    }
  };
  //   ......................................update Ads
  const updateAds = async (id) => {
    try {
      const response = await axios.put(ADMIN_Ads_URL.updateAds(id), getToken());
    } catch (error) {
      console.log(error);
    }
  };
  //   ......................................Get Ads Details

  const adsDetails = async (id) => {
    try {
      const response = await axios.get(
        ADMIN_Ads_URL.getAdsDetails(id),
        getToken()
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAds();
  }, []);

  return (
    <>
      {allAds.length > 0 ? (
        <Box>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: 4,
              marginBottom: 12,
              width: '100%',
            }}
          >
            {/* ------------------------------------Left Section */}
            <Grid container spacing={2} sx={{ paddingInlineStart: 5 }}>
              <Grid size={10}>
                <Box>
                  <Typography variant="h5">ADS Table Details</Typography>
                  <Typography>You can check all details</Typography>
                </Box>
              </Grid>

              {/* ----------------------------------Right Section */}
              <Grid
                size={2}
                sx={{
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                <Box>
                  <Modals
                    btnText={'Add New Ads'}
                    modalFunction={createAds}
                    roomNumbers={roomNumbers}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* --------------------------------------Table */}
          <Box sx={{ margin: 3 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>room Name</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Discount</StyledTableCell>
                    <StyledTableCell align="right">Capacity</StyledTableCell>
                    <StyledTableCell align="right">Active</StyledTableCell>
                    <StyledTableCell align="right">main dish</StyledTableCell>
                    <StyledTableCell align="right">Options</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.room.roomNumber}>
                      <StyledTableCell component="th" scope="row">
                        {row.room.roomNumber}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.room.price}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.room.discount}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.room.capacity}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.isActive ? 'true' : 'flase'}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.protein}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
