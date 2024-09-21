import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { VALIDATIONS } from '../../../../../constants/VALIDATIONS';
import axios from 'axios';

interface ModalProps {
  btnText: string;
  roomNumbers: string[];
}

export default function Modals({ btnText, roomNumbers }: ModalProps) {
  const [room, setRoom] = useState<string>(''); // room ID as a string
  const [isActive, setIsActive] = useState<boolean | null>(null); // isActive as boolean

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle Room selection change
  const handleRoomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value);
  };

  // Handle Active/Not Active change
  const handleActiveChange = (event: SelectChangeEvent) => {
    setIsActive(event.target.value === 'true');
  };

  // Form submit handler
  const onSubmit = async (formData: any) => {
    const payload = {
      room, // Room ID as string
      discount: Number(formData.discount),
      isActive: isActive ?? false,
    };

    try {
      await axios.post(
        `https://upskilling-egypt.com:3000/api/v0/admin/ads`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log('Ads created successfully:', payload);
      handleClose();
    } catch (error) {
      console.error('Error creating ads:', error);
    }
  };

  // Modal open/close state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal styles
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {/* Modal Trigger Button */}
      <Button variant="contained" onClick={handleOpen}>
        {btnText}
      </Button>

      {/* Modal Component */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={style}>
            {/* X Button */}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Modal Title */}
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Ads
            </Typography>

            {/* Room Selection */}
            <Box sx={{ minWidth: 120, marginBlockStart: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="room-select-label">Room Name</InputLabel>
                <Select
                  labelId="room-select-label"
                  id="room"
                  value={room}
                  label="room"
                  onChange={handleRoomChange}
                >
                  {roomNumbers && roomNumbers.length > 0 ? (
                    roomNumbers.map((room, i) => (
                      <MenuItem key={i} value={room}>
                        {room}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">No Rooms Available</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>

            {/* Discount Field */}
            <TextField
              id="outlined-basic"
              label="Discount"
              variant="outlined"
              sx={{ marginBlock: 3 }}
              error={!!errors.discount}
              helperText={errors.discount ? errors.discount.message : null}
              {...register('discount', {
                required: 'Discount is required',
                pattern: {
                  value: VALIDATIONS.discountRegex,
                  message: 'Discount must be a valid number',
                },
              })}
            />

            {/* Active/Not Active Selection */}
            <Box sx={{ minWidth: 120, marginBlockStart: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="active-select-label">Status</InputLabel>
                <Select
                  labelId="active-select-label"
                  id="active-select"
                  value={isActive !== null ? (isActive ? 'true' : 'false') : ''}
                  label="Status"
                  onChange={handleActiveChange}
                >
                  <MenuItem value="true">Active</MenuItem>
                  <MenuItem value="false">Not Active</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Save Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{ marginBlockStart: 3 }}
            >
              Save
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
}
