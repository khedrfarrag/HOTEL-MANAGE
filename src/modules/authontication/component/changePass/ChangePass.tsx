import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './sass/Changepass.module.scss'
import { useForm } from 'react-hook-form';


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

  const onsubmit = (data: FormValues)=>{
      console.log(data);
  }
  return (
  <>
<Box sx={{width:"100%"}}>
   <Grid container spacing={3}>
  <Grid  size={{ xs: 12, sm: 6 }}>
    <Stack sx={{padding:"5rem"}}>
      <Typography variant='h3'>Change Password</Typography>
      <Typography sx={{marginBottom:"2rem"}} variant='h6'>do you want to change your password?</Typography>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Stack spacing={2}>
        <TextField sx={{width:"70%", marginBottom:'1rem'}}
          required
          type="password"
          label="Old Password"
          error= {!!errors.oldPassword}
          helperText = { errors.oldPassword?.message}
          {...register("oldPassword",{required:"oldPassword is required",})}
        />
        <TextField
        sx={{width:"70%", marginBottom:'1rem'}}
        required 
        type="password"
        label="New Password"
        error= {!!errors.newPassword}
        helperText = { errors.newPassword?.message}
        {...register("newPassword",{required:"newPassword is required",})}
        ></TextField>
        
         <TextField sx={{width:"70%", marginBottom:'1rem'}}
          required
          type="password"
          label="Confirm Password"
          error= {!!errors.confirmPassword}
          helperText = { errors.confirmPassword?.message}
          {...register("confirmPassword",{required:"confirmPassword is required",})}
        />
        <Button variant="contained"
         sx={{width:"70%", marginBottom:'1rem'}}
        >Save</Button>
        </Stack>   
      </form>
    </Stack>
  </Grid>
  <Grid   size={{ xs: 12, sm: 6 }}>
  <Stack className='img-container'>nnnnnnnnnnnnnnn</Stack>
  </Grid>
  </Grid>
    </Box>
  </>);
}
