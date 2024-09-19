// import { Box, Link, Stack, TextField, Typography } from '@mui/material';
// import Grid from '@mui/material/Grid2';
// import Styled from './sass/Verify.module.scss';
// import React from 'react';
// import { VerifyAccountFormData } from '../../../../Interfaces/AuthResponse';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { VALIDATIONS } from '../../../../constants/VALIDATIONS';
// import { imgRegister } from '../../../../assets/ParrelAssets/Parrel';
// import axios from 'axios';
// import { ADMIN_Users_URL } from '../../../../constants/END-POINTS';

// export default function VerifyAccount() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<VerifyAccountFormData>({
//     defaultValues: { code: '', email: '' },
//   });

//   const onsubmit=async (data:VerifyAccountFormData)=>{
//     try{
//       const response =await axios.post(ADMIN_Users_URL.)
//     }catch(){

//     }
//   }
//   return (
//     <>
//       <Box sx={{ width: '90%', margin: 'auto' }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
//           <Grid size={{ md: 6, sm: 6, xs: 12 }}>
//             <Stack spacing={2}>
//               <Typography variant="h6" className={Styled.Herohead}>
//                 <span className={Styled.mainheader}>Stay</span>cation.
//               </Typography>
//             </Stack>
//             <Stack margin={5}>
//               <Stack>
//                 <Typography variant="h3" fontSize={30} fontWeight={600}>
//                   Reset Password
//                 </Typography>
//                 <Typography variant="body1">
//                   If you already have an account register
//                 </Typography>
//                 <Typography variant="body1">
//                   You can
//                   <Link
//                     className={Styled.Linklogin}
//                     component="button"
//                     variant="subtitle2"
//                     onClick={() => {
//                       navigate('/AuthLayOut/login');
//                       console.log("I'm a button.");
//                     }}
//                   >
//                     Login here !{' '}
//                   </Link>
//                 </Typography>
//               </Stack>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <Stack marginTop={5} spacing={2}>
//                   <TextField
//                     id="outlined-basic"
//                     label="Email"
//                     variant="outlined"
//                     {...register('email', {
//                       required: 'Email is requierd',
//                       pattern: {
//                         value: VALIDATIONS.emailRegex,
//                         message: 'Please enter a valid email',
//                       },
//                     })}
//                   />
//                   <Typography color="red" variant="caption">
//                     {errors.email?.message}
//                   </Typography>
//                 </Stack>
//               </form>
//             </Stack>
//           </Grid>
//           <Grid size={{ md: 6, sm: 6, xs: 12 }}>
//             <Stack className={Styled.imagStyle}>
//               <img src={imgRegister} alt="image-reset" />
//               <Stack className={Styled.Titleimg}>
//                 <Typography variant="h3">Reset Password</Typography>
//                 <Typography variant="h6">Homes as unique as you.</Typography>
//               </Stack>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }
