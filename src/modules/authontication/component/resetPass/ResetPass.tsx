import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AxiosErrorResponse,
  ResetPasswordFormData,
} from '../../../../Interfaces/AuthResponse';
import { ADMIN_Users_URL } from '../../../../constants/END-POINTS';
import { VALIDATIONS } from '../../../../constants/VALIDATIONS';
import Styled from './sass/ResetPass.module.scss';

export default function ResetPass({ imag }: { imag: string }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ResetPasswordFormData>({
    defaultValues: { email: '', seed: '', password: '', confirmPassword: '' },
  });

  //<<<<<<<<<<<<<<<<<<<<<<<<< handleSubmit fun>>>>>>>>>>>>>>>>
  const onSubmit = async (data: ResetPasswordFormData) => {
    console.log(data);
    try {
      const response = await axios.post(ADMIN_Users_URL.resetPassword, data);
      // toast.success(response.data.message);
      toast.success(
        response.data.message ||
          'Welcome back! You have successfully logged in.'
      );
      navigate('/AuthLayOut/login');
      console.log(response);
    } catch (error: any | unknown) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      toast.error(
        axiosError.response?.data.message ||
          'Login failed. Please check your credentials and try again.'
      );
    }
  };

  const [show, setshow] = useState(false);
  const handleshow = () => {
    setshow(!show);
  };
  return (
    <>
      <Box sx={{ width: '90%', margin: 'auto' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid
            size={{ md: 6, sm: 6, xs: 12 }}
            className={Styled.contanerInput}
          >
            <Stack spacing={2}>
              <Typography variant="h6" className={Styled.Herohead}>
                <span className={Styled.mainheader}>Stay</span>cation.
              </Typography>
            </Stack>
            <Stack margin={5}>
              <Stack>
                <Typography variant="h3" fontSize={30} fontWeight={600}>
                  Reset Password
                </Typography>
                <Typography variant="body1">
                  If you already have an account register
                </Typography>
                <Typography variant="body1">
                  You can
                  <Link
                    className={Styled.Linklogin}
                    component="button"
                    variant="subtitle2"
                    onClick={() => {
                      navigate('/AuthLayOut/login');
                      console.log("I'm a button.");
                    }}
                  >
                    Login here !{' '}
                  </Link>
                </Typography>
              </Stack>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack marginTop={5} spacing={2}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...register('email', {
                      required: 'Email is requierd',
                      pattern: {
                        value: VALIDATIONS.emailRegex,
                        message: 'Please enter a valid email',
                      },
                    })}
                  />
                  <Typography color="red" variant="caption">
                    {errors.email?.message}
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    label="OTP "
                    variant="outlined"
                    {...register('seed', {
                      required: 'OTP is requierd',
                    })}
                  />
                  <Typography color="red" variant="caption">
                    {errors.seed?.message}
                  </Typography>

                  <Stack className={Styled.inputPass} spacing={2}>
                    <TextField
                      id="outlined-basic"
                      label="password"
                      variant="outlined"
                      type={!show ? 'password' : 'text'}
                      {...register('password', {
                        required: 'Password is requierd',
                        pattern: {
                          value: VALIDATIONS.passwordRegex,
                          message:
                            'Password must be 8-20 characters long, and must begin with a letter.',
                        },
                      })}
                    />

                    <Typography color="red" variant="caption">
                      {errors.password?.message}
                    </Typography>

                    {show ? (
                      <VisibilityIcon
                        className={Styled.showicon}
                        onClick={handleshow}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className={Styled.showicon}
                        onClick={handleshow}
                      />
                    )}
                  </Stack>

                  <Stack className={Styled.inputConfPass}>
                    <TextField
                      id="outlined-basic"
                      label="confirmPassword"
                      type={!show ? 'password' : 'text'}
                      variant="outlined"
                      {...register('confirmPassword', {
                        validate: () => {
                          if (
                            getValues('password') !==
                            getValues('confirmPassword')
                          ) {
                            return 'Passwords do not match';
                          }
                        },
                      })}
                    />
                    <Typography color="red" variant="caption">
                      {errors.confirmPassword?.message}
                    </Typography>

                    {show ? (
                      <VisibilityIcon
                        className={Styled.showicon}
                        onClick={handleshow}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className={Styled.showicon}
                        onClick={handleshow}
                      />
                    )}
                  </Stack>

                  <Button
                    className={Styled.bttnSub}
                    variant="contained"
                    type="submit"
                    sx={{ height: '50px' }}
                  >
                    Reset
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Grid>
          <Grid
            size={{ md: 6, sm: 6, xs: 12 }}
            className={Styled.contanerimage}
          >
            <Stack className={Styled.imagStyle}>
              <img src={imag} alt="image-reset" />
              <Stack className={Styled.Titleimg}>
                <Typography variant="h3">Reset Password</Typography>
                <Typography variant="h6">Homes as unique as you.</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
