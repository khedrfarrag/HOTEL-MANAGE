import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState } from 'react';
import axios from 'axios';
import notfound from "../../../../assets/notfounded.jpg"
import { ADMIN_RoomFacility_URL, ADMIN_Rooms_URL } from '../../../../constants/END-POINTS';
import { alpha,Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, Select, SelectChangeEvent, Stack, styled, TablePagination, TextField, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight,FirstPage,LastPage } from '@mui/icons-material';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

interface RoomsData{
  _id:string;
  roomNumber:string;
  price:string;
  capacity:string;
  discount:string;
  images:string;
  facilities:string[]
}


export default function RoomsList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setOpen(true);
  } 
  const handleClose = () => setOpen(false);
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: 'rgb(55, 65, 81)',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[300],
      }),
    },
  }));
  
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openmeue = Boolean(anchorEl);
    const [roomselectdId,SetroomselectdId]=useState<string>("")
    const handleClick = (event: React.MouseEvent<HTMLElement| SVGSVGElement>,roomId: string) => {
      setAnchorEl(event.currentTarget as HTMLElement);
      SetroomselectdId(roomId)
      
    };
    const handleClosemenu = () => {
      setAnchorEl(null);
      SetroomselectdId("");
      
    };
   
  function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme(); 
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
  onClick={handleLastPageButtonClick}
  disabled={page >= Math.ceil(count / rowsPerPage) - 1}
  aria-label="last page"
>
  {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
</IconButton>
      </Box>
    );
  }
  const [page, setPage] =useState(0);
  const [rowsPerPage, setRowsPerPage] =useState(5);
  // const [valuename,Setvaluename]=useState("")

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement,MouseEvent> | null, newPage: number) => {
    setPage(newPage);  // Update current page
    getroom(newPage, rowsPerPage);
    console.log(event)
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
    getroom(0,parseInt(event.target.value)); // Fetch data for the new rows per page

  };

    const [RoomData,SetroomData]=useState<RoomsData[]>([])
    const [facilities, setFacilities] = useState<any[]>([]);
    const [selectedFacility, setSelectedFacility] = useState<string>("");
    const [totalCount,SettotalCount]=useState<number>(0)
    const getroom=async(pagenumber:number,pagesize:number)=>{
        try{
            const respons=await axios.get(ADMIN_Rooms_URL.getAllRooms,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`},params:{
                page:pagenumber,size:pagesize
            }})
            console.log(respons.data.message)
            console.log(respons.data)
            SetroomData(respons.data.data.rooms)
            SettotalCount(respons.data.data.totalCount)
            console.log(RoomData)
            
        }
        catch(error){
          console.error('Error fetching rooms:', error);
        }
      }
    
      const getroomsdetails=async()=>{
        try{
          const response=await axios.get(ADMIN_Rooms_URL.GetRoomDetails(roomselectdId),{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})
          console.log(response.data.data.room)
          handleClosemenu()
        }
        catch(error){
          console.error('Error fetching rooms details:', error);
        }
      }
      const deleteroom=async()=>{
        try{
          
            const response=await axios.delete(ADMIN_Rooms_URL.deleteRoom(roomselectdId),{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})
            console.log(response.data)
            toast.success(response.data.message)
            getroom(page,rowsPerPage)
            handleClose()
            handleClosemenu()

                    
          }

        catch(error){
          console.error('Error deleting room:', error);
        }
      }
      const getFacilities = async () => {
        try {
          const response = await axios.get(ADMIN_RoomFacility_URL.getAllRoomFacility, {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          });
          setFacilities(response.data.data.facilities);
          console.log(facilities)
        } catch (error) {
          console.log(error);
        }
      };
// const handelnamechange=(e: { target: { value: React.SetStateAction<undefined>; }; })=>{
//   const valueofname:any=e.target.value
//   console.log(valueofname)
//   Setnamevalue(valueofname)
//   getroom(page,rowsPerPage,valueofname)
// }
      useEffect(()=>{
        getroom(page,rowsPerPage)
        getFacilities()
        getroomsdetails()
    },[])

  function handleFacilitiesChange(event: SelectChangeEvent<any>): void {
    const selectedValue:any = event.target.value;
    setSelectedFacility(selectedValue);
    console.log(selectedValue)
    getroom(page,rowsPerPage)
  }

  
  return (
    <>
    <Box  sx={{ display: 'flex',justifyContent:"space-between", alignItems: 'center',paddingBottom:"20px" }}>
    <Stack>
      <Typography variant='h4'>Rooms Table Details</Typography>
      <span>You can check all details</span>
    </Stack>
    <Button style={{borderRadius:"20px",padding:"10px",width:"200px"}} variant="contained"><Link style={{textDecoration:"none",color:"#fff"}} to={"/dashBaord/add-edit-rooms"}>Add New Room</Link></Button>
    </Box>
    
   <Box sx={{ display: 'flex', gap: 2, alignItems: 'center',paddingBottom:"20px"}}>
      {/* Search by Number */}
      <TextField 
        placeholder="Search by number..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth 
      />

      

      {/* Facilities Dropdown */}
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Facilities</InputLabel>
        <Select
          value={selectedFacility}
          onChange={handleFacilitiesChange}
          label="Facilities"
           sx={{borderRadius:"10px"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value="facility1">Facility 1</MenuItem>
          <MenuItem value="facility2">Facility 2</MenuItem>
          <MenuItem value="facility3">Facility 3</MenuItem> */}
{facilities.map((item) => <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)}
</Select>
      </FormControl>
    </Box>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{border:"0",backgroundColor:"#E2E5EB",width:"100%"}}>
            <TableCell align="center">roomNumber</TableCell>
            <TableCell align="center">price</TableCell>
            <TableCell align="center">capacity</TableCell>
            <TableCell align="center">images</TableCell>
            <TableCell align="center">discount</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RoomData.map((rooms:RoomsData) => (
            <TableRow
              key={rooms._id}
              sx={{ td: { border: 0 },th:{border:0} }}
            >
              <TableCell  align="center" sx={{border:"0"}} component="th" scope="row">
                {rooms.roomNumber}
              </TableCell>
              <TableCell align="center">{rooms.price}</TableCell>
              <TableCell align="center">{rooms.capacity}</TableCell>
              <TableCell align="center">{rooms.images && rooms.images.length > 0
  ? <img src={rooms.images[0]} style={{width:"70px",height:"70px"}} />
  : <img src={notfound} style={{width:"70px",height:"70px"}} />}
</TableCell>
              <TableCell align="center">{rooms.discount}</TableCell>
              <TableCell align="center">{rooms.discount}</TableCell>
              <TableCell align="center"><MoreHorizSharpIcon  id="demo-customized-button"
        aria-controls={openmeue ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmeue ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={(event: React.MouseEvent<HTMLElement | SVGSVGElement, MouseEvent>) => handleClick(event, rooms._id)}/>
        </TableCell>
               <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={openmeue}
        onClose={handleClosemenu}
      >
        <MenuItem onClick={getroomsdetails}>
       <VisibilityIcon />
          View
        </MenuItem>
        <MenuItem component={Link} to={`/dashBaord/add-edit-rooms/${rooms._id}`} state={{roomdata: RoomData.find(r => r._id === roomselectdId),type:"Edit"}}onClick={() => console.log("Editing room:", rooms)} >
        <EditIcon />
          Edit
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleOpen} disableRipple>
          <DeleteOutlineIcon />
          Delete
        </MenuItem>
        
      </StyledMenu>
      
            </TableRow>
          ))}
         
        </TableBody>
        
      </Table>
      <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={Number(totalCount)}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
             <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src="\src\assets\Email.png"/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Delete This Room ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          are you sure you want to delete this item ? if you are sure just click on delete it
          </Typography>
          <Button onClick={deleteroom}>Delete modal ?</Button>
        </Box>
      </Modal>
    </div>
    </TableContainer>
    </>
   
    
  );
}
