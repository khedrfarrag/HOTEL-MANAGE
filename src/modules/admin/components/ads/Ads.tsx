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
import Modals from './modals/Modals';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DeleteModal from './modals/DeleteModal';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Margin, Padding } from '@mui/icons-material';

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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

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
    } catch (error) {
      console.error(error);
    }
  };

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
                <Modals btnText={'Add New Ad'} roomNumbers={roomNumbers} />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ margin: 3 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Room Name</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Discount</StyledTableCell>
                    <StyledTableCell align="right">Capacity</StyledTableCell>
                    <StyledTableCell align="right">Active</StyledTableCell>
                    <StyledTableCell align="right">Options</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allAds.map((ad) => (
                    <StyledTableRow key={ad.room.roomNumber}>
                      <StyledTableCell>{ad.room.roomNumber}</StyledTableCell>
                      <StyledTableCell align="right">
                        {ad.room.price}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {ad.room.discount}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {ad.room.capacity}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {ad.isActive ? 'true' : 'false'}
                      </StyledTableCell>

                      <StyledTableCell align="right">
                        <DeleteModal
                          btnText={<VisibilityIcon />}
                          adsId={ad._id}
                          onDeleteSuccess={getAllAds}
                        />
                        <DeleteModal
                          btnText={<DeleteForeverOutlinedIcon />}
                          adsId={ad._id}
                          onDeleteSuccess={getAllAds}
                        />

                        <DeleteModal
                          btnText={<EditIcon />}
                          adsId={ad._id}
                          onDeleteSuccess={getAllAds}
                        />
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
