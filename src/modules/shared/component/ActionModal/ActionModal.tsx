import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Button, IconButton, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosErrorResponse } from '../../../../Interfaces/AuthResponse/AuthResponse';
import { ADMIN_RoomFacility_URL } from '../../../../constants/END-POINTS';
import { RequiredField } from '../../../../constants/VALIDATIONS';
import {
  style,
  styleButton,
  stylesStackButton,
  stylesTextField,
} from './Styles';

type RoomFacilities = {
  name: string;
};

export default function BasicModal({
  handleClose,
  open,
  title,
  getFacilitiesList,
}: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RoomFacilities>({ defaultValues: { name: '' } });
  const navigate = useNavigate();
  const location = useLocation();
  const status = location.state?.type === 'edit';
  const listData = location.state?.listData;

  // Populate the form when in edit mode
  useEffect(() => {
    if (status && listData) {
      reset({ name: listData.name });
    }
  }, [status, listData, reset]);

  const onSubmit = async (data: RoomFacilities) => {
    try {
      const response = await axios({
        url: status
          ? ADMIN_RoomFacility_URL.updateRoomFacilty(listData._id)
          : ADMIN_RoomFacility_URL.createRoomFacility,
        method: status ? 'put' : 'post',
        data: data,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRkZWFmMTY0NzVlMmQ1MGRhNWFkNzYiLCJyb2xlIjoiYWRtaW4iLCJ2ZXJpZmllZCI6ZmFsc2UsImlhdCI6MTcyNjczNjc2NCwiZXhwIjoxNzI3OTQ2MzY0fQ.mlYDMSFEE3RbVMFXYXVHaWtEtB-b6kwvLlHL038kqiw`,
        }, //${localStorage.getItem('userToken')}
      });
      toast.success(response.data.message);
      handleClose();
      getFacilitiesList();
      reset();
    } catch (error) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      toast.error(axiosError.response?.data.message);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Modal header with close icon */}
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {title}
            </Typography>
            <IconButton
              onClick={() => {
                handleClose();
                reset({ name: '' });
                navigate('/layout-Master/facility-list');
              }}
              aria-label="cancel"
              size="large"
            >
              <HighlightOffRoundedIcon fontSize="inherit" color="error" />
            </IconButton>
          </Stack>

          {/* Form content */}
          <Stack mt={4} sx={{ width: '100%', marginTop: '2rem' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={stylesTextField}
                variant="filled"
                label="Name"
                type="text"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register('name', RequiredField('Name'))}
              />

              <Stack sx={stylesStackButton}>
                <Button variant="contained" sx={styleButton} type="submit">
                  Save
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
