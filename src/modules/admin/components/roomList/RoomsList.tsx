import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  Grid2,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AxiosErrorResponse } from '../../../../Interfaces/AuthResponse';
import { ADMIN_Rooms_URL } from '../../../../constants/END-POINTS';
import useGetFacilitiesList from '../../../Hooks/Facilities/useGetFacilitiesList';
import useGetRoomsList from '../../../Hooks/Rooms/useGetRoomsList';
import DeleteConfirmationModal from '../../../shared/component/DeleteConfirmationModal/DeleteConfirmationModal';
import TableWithAction from '../../../shared/component/TableWithAction/TableWithAction';
import Title from '../../../shared/component/Title/Title';

export default function RoomsList() {
  const { roomsList, loading, getRoomsList } = useGetRoomsList();
  const { facilitiesList } = useGetFacilitiesList();
  const [facility, setFacility] = useState('');

  const [roomId, setRooomsId] = useState('');
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleCloseDelete = () => setOpenModalDelete(false);
  const handleOpenDelete = (roomId: string) => {
    setRooomsId(roomId);
    setOpenModalDelete(true);
  };

  const DeleteRoom = async () => {
    try {
      await axios.delete(ADMIN_Rooms_URL.deleteRoom(roomId), {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      handleCloseDelete();
      getRoomsList();
      toast.success('Room deleted successfully.');
    } catch (error) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      toast.error(
        axiosError.response?.data.message ||
          'Failed to delete the room. Please try again.'
      );
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setFacility(event.target.value as string);
  };

  return (
    <>
      <Title
        title="Rooms Table Details"
        subTitle="You can check all details"
        buttonText="Add New Room"
      />

      <DeleteConfirmationModal
        openModalDelete={openModalDelete}
        handleCloseDelete={handleCloseDelete}
        itemName={'Room'}
        handleDeleteModel={DeleteRoom}
      />

      <Box sx={{ marginBlock: '1rem' }}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                placeholder="Search by number ..."
              />
            </FormControl>
          </Grid2>

          <Grid2 size={2}>
            <FormControl sx={{ m: 1 }} fullWidth>
              <InputLabel id="demo-simple-select-label">Tag</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tag"
                onChange={handleChange}
              >
                {facilitiesList.map((facility) => (
                  <MenuItem key={facility._id} value={facility.name}>
                    {facility.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid2>

          <Grid2 size={2}>
            <FormControl sx={{ m: 1 }} fullWidth>
              <InputLabel id="demo-simple-select-label">facilities</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="facilities"
                onChange={handleChange}
              >
                {facilitiesList.map((facility) => (
                  <MenuItem key={facility._id} value={facility.name}>
                    {facility.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
      </Box>

      <TableWithAction
        flag="roomsList"
        list={roomsList}
        handleOpenDelete={handleOpenDelete}
      />
    </>
  );
}
