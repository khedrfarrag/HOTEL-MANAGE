import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { VALIDATIONS } from '../../../../constants/VALIDATIONS';

export default function Modals({ btnText, modalFunction, roomNumbers }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlesubmit = (formData) => {
    modalFunction(formData);
  };

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ............................................................................Option01-RoomName

  const handleChange = (event: SelectChangeEvent) => {
    setRoomName(event.target.value as any);
  };

  return (
    <>
      {/* ....................................................................Modal Main Button */}
      <Button variant="contained" onClick={handleOpen}>
        {btnText}
      </Button>

      {/* ....................................................................Modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(modalFunction)}>
          {' '}
          <Box sx={style}>
            {/* ............................................................... Modal-Title */}
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Ads
            </Typography>
            {/* ...............................................................Modal-Options Room-Name */}
            <Box sx={{ minWidth: 120, marginBlockStart: 2 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={roomNumbers}
                  label="Room Name"
                  onChange={handleChange}
                >
                  {roomNumbers
                    ? roomNumbers.map((room, i) => {
                        <MenuItem key={i} value={room}>
                          {room}
                        </MenuItem>;
                      })
                    : ''}
                </Select>
              </FormControl>
            </Box>
            {/* ...............................................................Modal-text Discount */}
            <TextField
              id="outlined-basic"
              label="Discount"
              variant="outlined"
              sx={{ marginBlock: 3 }}
              {...register('discount', {
                required: 'discount is required',
                pattern: {
                  value: VALIDATIONS.discountRegex,
                  message: 'discount be Valid Number',
                },
              })}
            />

            {/* ...............................................................Modal-Options Active */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">roomName</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={roomName}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* ...............................................................Modal-Button*/}
            <Button
              variant="contained"
              sx={{ marginBlockStart: 3 }}
              onClick={modalFunction}
            >
              Save
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
}
