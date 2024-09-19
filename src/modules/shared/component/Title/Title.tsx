import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { TitleData } from '../../../../Interfaces/Title/TitleResponse';

export default function Title({
  title,
  subTitle,
  buttonText,
  handleOpen,
}: TitleData) {
  
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
      {/* Title and subtitle section */}
      <Stack>
        <Typography sx={{ fontSize: '1.25rem' }} variant="h4">
          {title}
        </Typography>
        <Typography sx={{ fontSize: '.875rem' }} variant="h6">
          {subTitle}
        </Typography>
      </Stack>

      {/* Button section */}
      <Stack>
        <Button
          sx={{
            backgroundColor: 'rgba(32, 63, 199, 1)',
            fontSize: {
              xs: '0.75rem',
              md: '1rem',
              xl: '0.875rem',
            },
            padding: {
              xs: '0.25rem 0.5rem',
              md: '0.5rem 1rem',
              xl: '0.375rem 0.75rem',
            },
          }}
          variant="contained"
          disableRipple
          onClick={handleOpen}
        >
          {buttonText}
        </Button>
      </Stack>
    </Stack>
  );
}
