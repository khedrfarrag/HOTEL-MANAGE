import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import emailImg from '../../../../assets/Email.png';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%', lg: '40%', xl: '30%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 },
  borderRadius: '.8rem',
};

export default function DeleteConfirmationModal({
  openModalDelete,
  handleCloseDelete,
  itemName,
  handleDeleteModel
}: any) {
  return (
    <div>
      <Modal
        open={openModalDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={() => {
                handleCloseDelete();
              }}
              aria-label="cancel"
              size="large"
            >
              <HighlightOffRoundedIcon fontSize="inherit" color="error" />
            </IconButton>
          </Stack>
          <Stack sx={{ width: '50%', mx: 'auto' }}>
            <img src={emailImg} alt="email-Img" />
          </Stack>
          <Stack sx={{ width: '100%', textAlign: 'center', my: '1.5rem' }}>
            <Typography>Delete This {itemName} ?</Typography>
            <Typography>
              are you sure you want to delete this item ? if you are sure just
              click on delete it
            </Typography>
          </Stack>
          <Stack>
            <Button onClick={handleDeleteModel} color='error' variant="contained" type="submit">
              delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
