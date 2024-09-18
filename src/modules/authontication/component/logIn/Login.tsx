
import { Box, Button, FormControl, FormHelperText, Grid2, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ADMIN_Users_URL } from "../../../../constants/END-POINTS";
import { VALIDATIONS } from "../../../../constants/VALIDATIONS";
import { LoginFormData } from "../../../../Interfaces/AuthResponse/AuthResponse";
import "./Login.css"; // Importing CSS module
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthonticationContext";
// import { HotelsList } from '../../../ParrelFiles';
import { Visibility } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const {saveUserData}=useContext(AuthContext)
  const Navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm<LoginFormData>({defaultValues:{email:"",password:""}})
  const onsubmit= async (data:LoginFormData)=>{
   try{
      const response = await axios.post(ADMIN_Users_URL.login,data);
      console.log(response.data.data.token)
      const token=response.data.data.token
      const altoken=token.replace("Bearer ", "");
      localStorage.setItem("userToken",altoken)
      console.log(altoken)  
      console.log(response)  
        saveUserData()
        toast.success(response.data.message)
        Navigate("/")
   }
    catch(error){
      console.log(error);
    }
    console.log(data)
    
   
  }

  return (
    <> 
       <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2  size={{ sm:12, md: 6 }}>
          <Stack className="leftside">
            <Typography variant="h1">Sign in</Typography>
            <Typography variant="h6">If you don’t have an account register
            You can <Link sx={{textDecoration:"none",color:"#000",fontWeight:"bold"}} href="/AuthLayOut/register">Register here !</Link>
            </Typography>
            <form onSubmit={handleSubmit(onsubmit)} >
              <Stack spacing={2}>
              <TextField  type="email" label="Email Address" variant="outlined" error={!!errors.email} helperText={errors.email?.message} {...register("email",{required:"email is require",pattern:{
                value:VALIDATIONS.emailRegex,
                message:"Invalid email"
              }})} />
              {/* <TextField type="password" label="Password" variant="outlined" error={!!errors.password} helperText={errors.password?.message} {...register("password",{required:"password is require"})} /> */}
              <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}   {...register("password",{required:"password is require"})}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
           {errors.password && (
    <FormHelperText>{errors.password.message}</FormHelperText>
  )}
        </FormControl>
              

              <Button variant="contained" type="submit">Login</Button>
              </Stack>
            
            </form>
            
            </Stack>
        </Grid2>
        <Grid2 size={{ sm:12, md: 6}}>
          <Stack className="img-container">
            <div className="next-side">
            <Typography variant="h3">Sign in to Roamhome</Typography>
            <span>Homes as unique as you.</span>
            </div>
            
          </Stack>
        </Grid2>
       
      </Grid2>
    </Box>
    {/* <HotelsList/> */}
    </>
  );
}