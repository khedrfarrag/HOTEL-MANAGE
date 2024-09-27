import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import axios from 'axios';
import { PORTAL_FavoriteRooms_URL } from '../../../../constants/END-POINTS';
import { Key } from '@mui/icons-material';

const imagewidth = '32%'; 

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 3,
  bottom: 3,
  display: 'flex',
  color: theme.palette.common.white,
}));



const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export default function Favorites() {

  
  
  const [favoritesList, setFavoritesList] =  React.useState([]);
  const getFavoritesList = async ()=>{
    try {
      const response = await axios.get(PORTAL_FavoriteRooms_URL.getMyFavoriteRoom, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      
    
      setFavoritesList(response.data.data.favoriteRooms);
      console.log(favoritesList);
    } catch (error) {
      console.log(error);
    }
  }
React.useEffect(() => {
  getFavoritesList();
  return () => {
  }
},[]);



  return (
    <Container>
      <Stack justifyContent="center"  spacing={2} direction="row">
        <Button variant="text">Your Favorites</Button>
      </Stack>

      <Breadcrumbs sx={{paddingBottom:3 , paddingTop: 3}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Favorites
        </Link>
      </Breadcrumbs>

      <Box  justifyContent="space-between" sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {favoritesList.map((favoriteRoom: any) => 

        <ImageButton   
          focusRipple
          key={favoriteRoom._id}
          style={{
            width: imagewidth,
          }}
        >
          
              <ImageSrc style={{ borderRadius: 15, backgroundImage: `url(${favoriteRoom.rooms[0].images})` }} />
          
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="white"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
                
              })}
            >
              
              {favoriteRoom.rooms[0].roomNumber}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      )}
    </Box>
    </Container>
  );
}
