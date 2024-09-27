import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import LoadingPage from '../../../../shared/component/loadingPage/LoadingPage';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface ModalProps {
  adsId: string;
}

export default function DetailsModal({ adsId }: ModalProps) {
  const [open, setOpen] = useState(false);
  const [ads, setAds] = useState();

  const adsDetails = async (id: string) => {
    try {
      const response = await axios.get(
        `https://upskilling-egypt.com:3000/api/v0/admin/ads/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log(response);
      setAds(response.data.data.ads);
      console.log(response.data.data.ads.createdAt);
      console.log(response.data.data.ads.room.capacity);
      console.log('ads Details');
    } catch (error) {
      console.error('Failed to get Detaisl:', error);
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

  useEffect(() => {
    if (open) {
      adsDetails(adsId);
    }
  }, [open, adsId]);

  return (
    <>
      {/*................................................................................. Modal Trigger Button */}
      <Button variant="text" onClick={handleOpen}>
        {' '}
        {<VisibilityIcon />}
        View
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

          {/* .......................................................................Details Title */}
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h1"
            sx={{ margin: 2 }}
          >
            Ads Details
          </Typography>

          {/* ...............................................................................Details Paragraph */}
          {ads ? (
            <Box sx={{ margin: 2, maxHeight: '50%' }}>
              {' '}
              <Typography id="modal-modal-description" variant="body2">
                Room Number :{ads.room.roomNumber}
              </Typography>
              <Typography id="modal-modal-description" variant="body2">
                Room Price :{ads.room.price}
              </Typography>
              <Typography id="modal-modal-description" variant="body2">
                Room Capacity: {ads.room.capacity}
              </Typography>
              <Typography id="modal-modal-description" variant="body2">
                Discount :{ads.room.discount}
              </Typography>
              <Typography id="modal-modal-description" variant="body2">
                Created At : {ads.createdAt}
              </Typography>
            </Box>
          ) : (
            <LoadingPage />
          )}
        </Box>
      </Modal>
    </>
  );
}
