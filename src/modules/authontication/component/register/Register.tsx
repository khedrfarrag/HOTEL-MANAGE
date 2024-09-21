import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';
import Style from './sass/Register.module.css';
import {
  emailValidation,
  PasswordValidation,
  VALIDATIONS,
} from '../../../../constants/VALIDATIONS';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import {
  AxiosErrorResponse,
  RegisterFormData,
} from '../../../../Interfaces/AuthResponse';
import { useForm } from 'react-hook-form';
import { ADMIN_Users_URL } from '../../../../constants/END-POINTS';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { imgRegister } from '../../../../assets/ParrelAssets/Parrel';
// import UnstyledSelectIntroduction from '../../../shared/component/TextFieldSelect/Select';
// import InputFileUpload from '../../../shared/component/TextFieldSelect/Select';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function Register() {
  // <<<<<<<<<<<<<<<<<coustom input field >>>>>>>>>>>>>>>>>>>>
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  // ?//////////////////////
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormData>({
    defaultValues: {
      userName: '',
      phoneNumber: '',
      country: '',
      profileImage: '',
      email: '',
      password: '',
      role: 'admin',
      confirmPassword: '',
    },
  });

  // convart data from normal data to FormData as a function
  const convertDataToFormData = (data: RegisterFormData) => {
    const formData = new FormData();
    formData.append('userName', data.userName);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('country', data.country);
    formData.append('profileImage', data?.profileImage[0]);
    formData.append('role', data.role);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword);
    return formData;
  };

  //<<<<<<<<<<<<<<<<<<<<<<<<< handleSubmit fun>>>>>>>>>>>>>>>>
  const onSubmit = async (data: RegisterFormData) => {
    const DataForm = convertDataToFormData(data);
    console.log(data);
    try {
      const response = await axios.post(ADMIN_Users_URL.createUser, DataForm);
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
          'Register failed. Please check your credentials and try again.'
      );
    }
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<handle  VisibilityIcon >>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
            className={Style.contanerContent}
          >
            <Stack spacing={2}>
              <Typography variant="h6" className={Style.Herohead}>
                <span className={Style.mainheader}>Stay</span>cation.
              </Typography>
            </Stack>
            <Stack margin={5}>
              <Stack>
                <Typography variant="h3" fontSize={30} fontWeight={600}>
                  Sign up
                </Typography>
                <Typography variant="body1">
                  If you already have an account register
                </Typography>
                <Typography variant="body1">
                  You can
                  <Link
                    className={Style.Linklogin}
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
                    label="userName"
                    variant="outlined"
                    {...register('userName', {
                      required: 'userName is requierd',
                      pattern: VALIDATIONS.usernameRegex,
                    })}
                  />
                  <Typography color="red" variant="caption">
                    {errors.userName?.message}
                  </Typography>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="phoneNumber"
                      variant="outlined"
                      {...register('phoneNumber', {
                        required: 'phoneNumber is requierd',
                        pattern: {
                          value: VALIDATIONS.phoneRegex,
                          message: 'Please enter a valid phoneNumber',
                        },
                      })}
                    />

                    <TextField
                      id="outlined-basic"
                      label="country"
                      variant="outlined"
                      {...register('country', {
                        required: 'country is requierd',
                        pattern: VALIDATIONS.countryRegex,
                      })}
                    />
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload image
                      <VisuallyHiddenInput
                        type="file"
                        multiple
                        {...register('profileImage')}
                        onChange={(event) => console.log(event.target.files)}
                      />
                    </Button>
                  </Grid>
                  <TextField
                    id="outlined-basic"
                    label="email "
                    variant="outlined"
                    {...register('email', {
                      required: emailValidation.required,
                      pattern: emailValidation.pattern,
                    })}
                  />
                  <Typography color="red" variant="caption">
                    {errors.email?.message}
                  </Typography>

                  <Stack className={Style.inputPass} spacing={2}>
                    <TextField
                      id="outlined-basic"
                      label="password"
                      variant="outlined"
                      type={!show ? 'password' : 'text'}
                      {...register('password', {
                        required: PasswordValidation.required,
                        pattern: PasswordValidation.pattern,
                      })}
                    />

                    <Typography color="red" variant="caption">
                      {errors.password?.message}
                    </Typography>

                    {show ? (
                      <VisibilityIcon
                        className={Style.showicon}
                        onClick={handleshow}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className={Style.showicon}
                        onClick={handleshow}
                      />
                    )}
                  </Stack>
                  <Stack className={Style.inputConfPass}>
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
                        className={Style.showicon}
                        onClick={handleshow}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className={Style.showicon}
                        onClick={handleshow}
                      />
                    )}
                  </Stack>

                  <Button
                    className={Style.bttnSub}
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
          <Grid size={{ md: 6, sm: 6, xs: 12 }} className={Style.contanerimg}>
            <Stack className={Style.imagStyle}>
              <img src={imgRegister} alt="image-reset" />
              <Stack className={Style.Titleimg}>
                <Typography variant="h3">Sign up to Roamhome</Typography>
                <Typography variant="h6">Homes as unique as you.</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
