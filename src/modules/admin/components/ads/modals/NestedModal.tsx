import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import DeleteModal from './DeleteModal';
import EditModals from './EditModals';
import DetailsModal from './DetailsModal';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '80%',
  transform: 'translate(-10%, -90%)',
  bgcolor: 'background.paper',
  pt: 0,
  pb: 0,
  px: 0,
};

export default function NestedModal({ adsId, onDeleteSuccess, onEditSuccess }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <MoreHorizIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '10%' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 0,
              mb: 0,
              mx: 0,
              px: 0,
            }}
          >
            <Typography>
              <DeleteModal adsId={adsId} onDeleteSuccess={onDeleteSuccess} />
            </Typography>
            <Typography>
              <EditModals adsId={adsId} onEditSuccess={onEditSuccess} />
            </Typography>
            <Typography>
              <DetailsModal adsId={adsId} />
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
