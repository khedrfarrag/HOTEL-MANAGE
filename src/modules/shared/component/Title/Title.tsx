import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function Title() {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBlock: '1.5rem',
      }}
      direction="row"
    >
      <Stack>
        <Typography variant="h4">Facilities Table Details</Typography>
        <Typography variant="h6">You can check all details</Typography>
      </Stack>

      <Stack>
        <Button
          sx={{ backgroundColor: 'rgba(32, 63, 199, 1)' }}
          variant="contained"
          disableRipple
          disableElevation
        >
          Add New Facility
        </Button>
      </Stack>
    </Stack>
  );
}
