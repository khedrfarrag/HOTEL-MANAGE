import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import LoadingPage from '../../../shared/component/loadingPage/LoadingPage';
import CreateModal from './modals/CreateModal';
import { toast } from 'react-toastify';
import NestedModal from './modals/NestedModal';

export default function Ads() {
  const [allAds, setAllAds] = useState([]);
  const [roomNumbers, setRoomNumbers] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses}`]: {
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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  //   ......................................... get all Ads
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

      setAllAds(response.data.data.ads);
      console.log(response.data.data.ads);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  //   ......................................... get all Rooms

  const getAllRooms = async () => {
    try {
      const response = await axios.get(
        `https://upskilling-egypt.com:3000/api/v0/admin/rooms`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log(response);
      setRoomNumbers(response.data.data.rooms.map((ad) => ad._id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllAds();
    getAllRooms();
  }, []);

  return (
    <>
      {allAds.length > 0 ? (
        <Box>
          <Box
            sx={{ flexGrow: 1, marginTop: 4, marginBottom: 12, width: '100%' }}
          >
            <Grid container spacing={2} sx={{ paddingInlineStart: 5 }}>
              <Grid size={10}>
                <Box>
                  <Typography variant="h5">Ads Table Details</Typography>
                  <Typography>You can check all details</Typography>
                </Box>
              </Grid>

              <Grid size={2} sx={{ margin: 'auto', textAlign: 'center' }}>
                <CreateModal
                  btnText={'Add New Ad'}
                  roomNumbers={roomNumbers}
                  onCreateSuccess={getAllAds}
                />
              </Grid>
            </Grid>
          </Box>

          {/* ------------------------------------------------------------------Table */}
          <Box sx={{ margin: 3, textAlign: 'center' }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead
                  sx={{
                    backgroundColor: 'rgba(226, 229, 235, 1)',
                    color: 'white',
                  }}
                >
                  <TableRow>
                    <StyledTableCell align="center">Room Name</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">Discount</StyledTableCell>
                    <StyledTableCell align="center">Capacity</StyledTableCell>
                    <StyledTableCell align="center">Active</StyledTableCell>
                    <StyledTableCell align="center">Options</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allAds.map((ad) => (
                    <StyledTableRow key={ad.room.roomNumber}>
                      <StyledTableCell align="center">
                        {ad.room.roomNumber}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {ad.room.price}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {ad.room.discount}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {ad.room.capacity}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {ad.isActive ? 'true' : 'false'}
                      </StyledTableCell>

                      <StyledTableCell
                        align="center"
                        sx={{
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        <Box>
                          {/* <DetailsModal adsId={ad._id} />

                          <DeleteModal
                            adsId={ad._id}
                            onDeleteSuccess={getAllAds}
                          />
                          <EditModals
                            adsId={ad._id}
                            onEditSuccess={getAllAds}
                          /> */}
                          <NestedModal
                            adsId={ad._id}
                            onDeleteSuccess={getAllAds}
                            onEditSuccess={getAllAds}
                          />
                        </Box>
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
