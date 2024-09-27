import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import deleteimage from '../../../../../assets/delete.png';
import axios from 'axios';
import { Margin, Padding } from '@mui/icons-material';

interface ModalProps {
  btnText: React.ReactNode;
  adsId: string;
  onDeleteSuccess?: () => void;
}

export default function DeleteModal({
  btnText,
  adsId,
  onDeleteSuccess,
}: ModalProps) {
  const [open, setOpen] = useState(false);

  const deleteAds = async (id: string) => {
    try {
      await axios.delete(
        `https://upskilling-egypt.com:3000/api/v0/admin/ads/${id}`,
        {
          headers: {
            Authorization: ` ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log('Ad Deleted');
      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
      handleClose();
    } catch (error) {
      console.error('Failed to delete ad:', error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

  return (
    <>
      <Button variant="text" onClick={handleOpen}>
        {btnText}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
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

          <Box sx={{ textAlign: 'center' }}>
            <img src={deleteimage} alt="delete" />

            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              sx={{ margin: 5 }}
            >
              Delete This Ad?
            </Typography>

            <Typography id="modal-modal-description" variant="body2">
              Are you sure you want to delete this ad? If you are sure, click on
              delete.
            </Typography>

            <Button
              variant="contained"
              sx={{ marginBlockStart: 3 }}
              onClick={() => deleteAds(adsId)} // Pass the correct ad ID
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
