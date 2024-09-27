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
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { toast } from 'react-toastify';

interface ModalProps {
  roomNumbers: string[];
  onCreateSuccess?: () => void;
}

export default function EditModals({ onEditSuccess, adsId }: ModalProps) {
  // -------------------------------------------------------------isActive as boolean
  const [isActive, setIsActive] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //-------------------------------------------------------------- Handle Active/Not Active change
  const handleActiveChange = (event: SelectChangeEvent) => {
    setIsActive(event.target.value === 'true');
  };

  //-------------------------------------------------------------- Form submit handler
  const onSubmit = async (formData: any) => {
    const payload = {
      discount: Number(formData.discount),
      isActive: isActive ?? false,
    };

    try {
      const response = await axios.put(
        `https://upskilling-egypt.com:3000/api/v0/admin/ads/${adsId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log('Ads Updated successfully:', payload);
      toast.success(response.data.message);
      if (onEditSuccess) {
        onEditSuccess();
      }
      handleClose();
    } catch (error) {
      console.error('Error Editing ads:', error);
      toast.error(error.response.data.message);
    }
  };

  //--------------------------------------------------------- Modal open/close state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ---------------------------------------------------------Modal styles
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
      {' '}
      {/*.............................................................. Modal Trigger Button */}
      <Button variant="text" onClick={handleOpen}>
        {<EditIcon />}
        Edit
      </Button>
      {/*................................................................... Modal Component */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={style}>
            {/*............................................................................... X Button */}
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

            {/* .............................................................................Modal Title */}
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Ads
            </Typography>

            {/*................................................................ Discount Field */}
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

            {/* ..........................................................Active/Not Active Selection */}
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

            {/* ...................................................................Save Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{ marginBlockStart: 3 }}
            >
              Edit
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
}
