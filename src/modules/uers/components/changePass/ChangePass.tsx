import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Stack } from 'react-bootstrap';
import './sass/Changepass.module.scss'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
interface FormValues {
  oldPassword: string;
newPassword: string;
confirmPassword: string;
}

export default function ChangePass() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({defaultValues:{oldPassword:"",newPassword:"",confirmPassword:""}});

  const onSubmit = async (data: FormValues)=>{
      try {
        const response = await axios.post('https://upskilling-egypt.com:3000/api/v0/admin/users/change-password', data);
        console.log(response);
        toast.success('password changed succefully');
        } 
        catch (error:any) {
        toast.error(error.response.data.message);
        console.log(error);
        
      }
    }
  return (<>

<Box sx={{width:"100%"}}>
   <Grid container spacing={3}>
  <Grid  size={{ sm: 12, md: 6 }}>
    <Stack sx={{padding:"5rem"}}>
      <Typography variant='h3'>Change Password</Typography>
      <Typography sx={{marginBottom:"2rem"}} variant='h6'>do you want to change your password?</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            sx={{width:"70%", marginBottom:'1rem'}}
          
            type="password"
            label="Old Password"
            error= {!!errors.oldPassword}
            helperText = { errors.oldPassword?.message}
            {...register("oldPassword",{required:"oldPassword is required",})}  
          ></TextField>
        
        <TextField
        sx={{width:"70%", marginBottom:'1rem'}}
    
        type="password"
        label="New Password"
        error= {!!errors.newPassword}
        helperText = { errors.newPassword?.message}
        {...register("newPassword",{required:"newPassword is required",})}
        ></TextField>
        
        <TextField 
        sx={{width:"70%", marginBottom:'1rem'}}
      
        type="password"
        label="Confirm Password"
        error= {!!errors.confirmPassword}
        helperText = { errors.confirmPassword?.message}
        {...register("confirmPassword",{required:"confirmPassword is required",})}
        ></TextField>
         
           <Button variant="contained" type="submit"
         sx={{width:"70%", marginBottom:'1rem'}}
        >Save</Button>
        </Stack>
     
      </form>
    </Stack>
  </Grid>
  <Grid   size={{ md: 6, sm: 12 }}>
  <Stack className='img-container'>nnnnnnnnnnnnnnn</Stack>
  </Grid>
  </Grid>
    </Box>
  </>);
}
