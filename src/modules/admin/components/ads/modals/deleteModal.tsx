import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import deleteimage from '../../../../../assets/delete.png';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import axios from 'axios';
import { toast } from 'react-toastify';

interface ModalProps {
  adsId: string;
  onDeleteSuccess?: () => void;
}

export default function DeleteModal({ adsId, onDeleteSuccess }: ModalProps) {
  const [open, setOpen] = useState(false);

  const deleteAds = async (id: string) => {
    try {
      await axios.delete(
        `https://upskilling-egypt.com:3000/api/v0/admin/ads/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log('Ad Deleted');
      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
      handleClose();
      toast.success('Ads Deleted Successfuly');
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
    width: '40%',
    bgcolor: 'background.paper',
    Padding: 0,
    Margin: 0,
  };

  return (
    <>
      {/*................................................................................. Modal Trigger Button */}
      <Button variant="text" onClick={handleOpen}>
        {<DeleteForeverOutlinedIcon />}
        Delete
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          {/*............................................................................... X Button */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'red',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* ................................................................................Delete Image */}
          <Box sx={{ textAlign: 'center' }}>
            <img src={deleteimage} alt="delete" />

            {/* ................................................................................Delete Title */}
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              sx={{ margin: 5 }}
            >
              Delete This Ad?
            </Typography>

            {/* ...............................................................................Delete Paragraph */}
            <Typography id="modal-modal-description" variant="body2">
              Are you sure you want to delete this ad? If you are sure, click on
              delete.
            </Typography>

            {/* ...............................................................................Delete Button */}
            <Button
              variant="contained"
              sx={{ margin: 4 }}
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
