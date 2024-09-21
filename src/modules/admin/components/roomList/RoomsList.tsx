import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import notfound from "../../../../assets/notfounded.jpg"
import { ADMIN_Rooms_URL, getToken } from '../../../../constants/END-POINTS';
import { alpha,AppBar,Box, Button, Divider, FormControl, IconButton, InputAdornment, InputBase, InputLabel, Select, Stack, styled, TableFooter, TablePagination, TextField, Toolbar, Typography } from '@mui/material';
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

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}




export default function RoomsList() {
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
    const open = Boolean(anchorEl);
    const [roomselectdId,SetroomselectdId]=useState<string|null>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>,roomId: string) => {
      setAnchorEl(event.currentTarget);
      SetroomselectdId(roomId)
    };

    const handleClose = () => {
      setAnchorEl(null);
      SetroomselectdId(null);
      deleteroom()
      
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
  const [valuename,Setvaluename]=useState("")

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    const [RoomData,SetroomData]=useState([])
    const getroom=async(pagenumber:number,pagesize:number,valuename:string)=>{
        try{
            const respons=await axios.get(ADMIN_Rooms_URL.getAllRooms,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`},params:{
                page:pagenumber,size:pagesize,value:valuename
            }})
            console.log(respons.data.message)
            console.log(respons.data)
            SetroomData(respons.data.data.rooms)
            console.log(RoomData)
            
        }
        catch(error){
          console.error('Error fetching rooms:', error);
        }
      }
    

      const deleteroom=async()=>{
        try{
const response=await axios.delete(ADMIN_Rooms_URL.deleteRoom(roomselectdId),{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})
console.log(response.data)
toast.success(response.data.message)
getroom(1,rowsPerPage,"")
        }
        catch(error){
          console.error('Error deleting room:', error);
        }
      }
      useEffect(()=>{
        getroom(1,rowsPerPage,"")
    },[])

  function handleTagChange(event: SelectChangeEvent<any>, child: ReactNode): void {
    throw new Error('Function not implemented.');
  }

  function handleFacilitiesChange(event: SelectChangeEvent<any>, child: ReactNode): void {
    throw new Error('Function not implemented.');
  }

  function handelnamechange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    Setvaluename(event.target.value)
    console.log(event.target.value)
   getroom(1,rowsPerPage,event.target.value)

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
        fullWidth onChange={handelnamechange}
      />

      {/* Tag Dropdown */}
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Tag</InputLabel>
        <Select
          value={""}
          onChange={handleTagChange}
          label="Tag"
          sx={{borderRadius:"10px"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="tag1">Tag 1</MenuItem>
          <MenuItem value="tag2">Tag 2</MenuItem>
          <MenuItem value="tag3">Tag 3</MenuItem>
        </Select>
      </FormControl>

      {/* Facilities Dropdown */}
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Facilities</InputLabel>
        <Select
          value={""}
          onChange={handleFacilitiesChange}
          label="Facilities"
           sx={{borderRadius:"10px"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="facility1">Facility 1</MenuItem>
          <MenuItem value="facility2">Facility 2</MenuItem>
          <MenuItem value="facility3">Facility 3</MenuItem>
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
          {RoomData.map((rooms) => (
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
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={(event)=>handleClick(event, rooms._id)}/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={RoomData.length}
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
      
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
       <VisibilityIcon />
          View
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <EditIcon />
          Edit
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteOutlineIcon />
          Delete
        </MenuItem>
        
      </StyledMenu>
    </div>
 
    </TableContainer>
    </>
   
    
  );
}
