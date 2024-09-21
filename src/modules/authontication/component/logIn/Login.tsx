import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import imgLogin from './img/Rectangle 7.png';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { ADMIN_Users_URL } from '../../../../constants/END-POINTS';
import {
  emailValidation,
  PasswordValidation,
} from '../../../../constants/VALIDATIONS';
import { LoginFormData } from '../../../../Interfaces/AuthResponse/AuthResponse';
import Style from './sass/Login.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthonticationContext';
import { AxiosErrorResponse } from '../../../../Interfaces/AuthResponse';

export default function Login() {
  const navigate = useNavigate();
  const { userData, saveUserData } = useContext<any>(AuthContext);

  //<<<<<<<<<<<<<<<<<<<<<<<<< handleSubmit fun>>>>>>>>>>>>>>>>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ defaultValues: { email: '', password: '' } });
  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post(ADMIN_Users_URL.login, data);
      const token = response.data.data.token;
      localStorage.setItem('token', token);
      saveUserData();
      toast.success(
        response?.data.message || 'Welcome ! You have successfully logged in.'
      );
      if (userData?.role === 'admin') {
        navigate('/dashBaord');
      } else {
        navigate('/');
      }
    } catch (error) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      toast.error(
        axiosError.response?.data.message ||
          'login failed. Please check your credentials and try again.'
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
      <Box sx={{ width: '90%', margin: 'auto' }} className={Style.MainLogin}>
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
                  Sign in
                </Typography>
                <Typography variant="body1">
                  If you don’t have an account register{' '}
                </Typography>
                <Typography variant="body1">
                  You can
                  <Link
                    className={Style.Linklogin}
                    component="button"
                    variant="subtitle2"
                    onClick={() => {
                      navigate('/AuthLayOut/register');
                      console.log("I'm a button.");
                    }}
                  >
                    Register here !{' '}
                  </Link>
                </Typography>
              </Stack>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack marginTop={5} spacing={2}>
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
                  <Typography variant="body1" textAlign={'right'}>
                    <Link
                      className={Style.Linklogin}
                      component="button"
                      variant="subtitle2"
                      onClick={() => {
                        navigate('/AuthLayOut/forget-password');
                        console.log("I'm a button.");
                      }}
                    >
                      Forget Password ?{' '}
                    </Link>
                  </Typography>
                  <Button
                    className={Style.bttnSub}
                    variant="contained"
                    type="submit"
                    sx={{ height: '50px' }}
                  >
                    log in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Grid>
          <Grid size={{ md: 6, sm: 6, xs: 12 }} className={Style.contanerimg}>
            <Stack className={Style.imagStyle}>
              <img src={imgLogin} alt="image-reset" />
              <Stack className={Style.Titleimg}>
                <Typography variant="h3">Sign in to Roamhome</Typography>
                <Typography variant="h6">Homes as unique as you.</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// const [showPassword, setShowPassword] = useState(false);

//   const handleMouseUpPassword = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     event.preventDefault();
//   };
//   const { saveUserData } = useContext(AuthContext);
//   const Navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormData>({ defaultValues: { email: '', password: '' } });
//   const onsubmit = async (data: LoginFormData) => {
//     try {
//       const response = await axios.post(ADMIN_Users_URL.login, data);
//       console.log(response.data.data.token);
//       const token = response.data.data.token;
//       const altoken = token.replace('Bearer ', '');
//       localStorage.setItem('userToken', altoken);
//       console.log(altoken);
//       console.log(response);
//       saveUserData();
//       toast.success(response.data.message);
//       Navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(data);
//   };

// {/* <form onSubmit={handleSubmit(onsubmit)}>
//                 <Stack spacing={2}>
//                   <TextField
//                     type="email"
//                     label="Email Address"
//                     variant="outlined"
//                     error={!!errors.email}
//                     helperText={errors.email?.message}
//                     {...register('email', {
//                       required: 'email is require',
//                       pattern: {
//                         value: VALIDATIONS.emailRegex,
//                         message: 'Invalid email',
//                       },
//                     })}
//                   />
//                   {/* <TextField type="password" label="Password" variant="outlined" error={!!errors.password} helperText={errors.password?.message} {...register("password",{required:"password is require"})} /> */}
//                   <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
//                     <InputLabel htmlFor="outlined-adornment-password">
//                       Password
//                     </InputLabel>
//                     <OutlinedInput
//                       id="outlined-adornment-password"
//                       type={showPassword ? 'text' : 'password'}
//                       {...register('password', {
//                         required: 'password is require',
//                       })}
//                       endAdornment={
//                         <InputAdornment position="end">
//                           <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={handleClickShowPassword}
//                             onMouseDown={handleMouseDownPassword}
//                             onMouseUp={handleMouseUpPassword}
//                             edge="end"
//                           >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       }
//                       label="Password"
//                     />
//                     {errors.password && (
//                       <FormHelperText>{errors.password.message}</FormHelperText>
//                     )}
//                   </FormControl>

//                   <Button variant="contained" type="submit">
//                     Login
//                   </Button>
//                 </Stack>
//               </form> */}
