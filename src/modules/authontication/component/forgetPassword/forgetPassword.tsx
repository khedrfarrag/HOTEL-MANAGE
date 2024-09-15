import {
  Button,
  CircularProgress,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  AxiosErrorResponse,
  ForgetPasswordFormData,
} from '../../../../Interfaces/AuthResponse/AuthResponse';
import { emailValidation } from '../../../../constants/VALIDATIONS';
import Styles from './forgetPassword.module.css';

export default function ForgetPass() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgetPasswordFormData>({ defaultValues: { email: '' } });

  // Function to handle form submission for ForgetPassword
  const onSubmit = async (data: ForgetPasswordFormData) => {
    try {
      const response = await axios.post(
        'https://upskilling-egypt.com:3000/api/v0/admin/users/forgot-password',
        data
      );

      // Showing a success message using toast notification
      toast.success(
        response.data.message ||
          'Password reset successful. Please check your email for further instructions.'
      );

      // Navigate to the reset password page after a successful submission
      navigate('/reset-Pass');
    } catch (error) {

      // Handling Axios error and showing an error message using toast notification
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      toast.error(
        axiosError?.response?.data?.message ||
          "Something went wrong. We couldn't reset your password. Please try again."
      );
    }
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              sx={{ width: '75%', marginInline: 'auto', marginBlock: '6rem' }}
            >
              {/* ------------------ Page title  ------------------ */}
              <Typography variant="h3">Forgot password</Typography>
              <Typography variant="h6">
                If you already have an account register
              </Typography>
              <Typography variant="h6">
                You can{' '}
                <Typography component="span">
                  <Link className={Styles['link-login']} to="/login">
                    {' '}
                    Login here !
                  </Link>
                </Typography>
              </Typography>
            </Stack>

             {/* ------------------ Form for password reset  ------------------*/}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack sx={{ width: '75%', marginInline: 'auto' }}>
                <InputLabel sx={{ marginBlock: '.5rem' }} htmlFor="email-input">
                  Email
                </InputLabel>
                
                 {/* Email input field with validation */}
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      bgcolor: 'rgba(245, 246, 248, 1)',
                    },
                  }}
                  id="email-input"
                  type="text"
                  placeholder="Please type here ..."
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register('email', emailValidation)}
                />

                <Button
                  sx={{ marginBlock: '4rem' }}
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Typography component="span">please wait...</Typography>
                      <CircularProgress
                        size={24}
                        sx={{ ml: 2, color: 'white' }}
                      />{' '}
                    </>
                  ) : (
                    'Send mail'
                  )}
                </Button>
              </Stack>
            </form>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              sx={{ borderRadius: '1rem' }}
              className={Styles['bg-forget-pass']}
            ></Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
