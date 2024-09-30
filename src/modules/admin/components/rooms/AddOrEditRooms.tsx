
import axios from "axios";
import { useForm } from "react-hook-form";
import { ADMIN_RoomFacility_URL, ADMIN_Rooms_URL } from "../../../../constants/END-POINTS";
import { useEffect, useState } from "react";
import { Box, Button, FormControl, FormHelperText, Select, Stack, TextField, Typography } from "@mui/material";
import { MenuItem } from "@mui/material"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddOrEditRooms() {
  const location=useLocation()
  const {roomdata,type}=location.state?location.state:""
  const navigate=useNavigate()
  const [facilities, setFacilities] = useState([]);
  const [facilitiesId, setFacilitiesId] = useState<string[]>([]); // Array to store selected facility IDs
  console.log(roomdata,type)


  const getFacilities = async () => {
    try {
      const response = await axios.get(ADMIN_RoomFacility_URL.getAllRoomFacility, {
        headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
      });
      setFacilities(response.data.data.facilities);
    } catch (error) {
      console.log(error);
    }
  };

  type FormValues = {
    roomNumber: string;
    price: string;
    capacity: string;
    discount: string;
    facilities: string[];
    createdBy: string;
    imgs: FileList|null;
    _id: number;
    createdAt: string;
    updatedAt: string;
  };

  const convertToFormData = (data: FormValues) => {
    const formData = new FormData();
    formData.append("roomNumber", data.roomNumber);
    formData.append("price", data.price);
    formData.append("capacity", data.capacity);
    formData.append("discount", data.discount);
    
    facilitiesId.forEach((facility: string) => {
      formData.append("facilities[]", facility);
    });

    if (data.imgs && data.imgs.length > 0) {
      Array.from(data.imgs).forEach((image) => {
        formData.append("imgs", image);
      });
    }
    
    // for (let i = 0; i < files.length; i++) {
    //    galleryData.append('images[]', file[i])
    // }
    return formData;
  };

  const { register, handleSubmit,formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      roomNumber: type === "Edit" ? roomdata.roomNumber : "",
      price: type === "Edit" ? roomdata.price : "",
      capacity: type === "Edit" ? roomdata.capacity : "",
      discount: type === "Edit" ? roomdata.discount : "",
      facilities:type === "Edit" ? roomdata.facilities.map((f: any) => f._id) : [],
      imgs:type === "Edit" ?roomdata.imgs:null,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const createData = convertToFormData(data);
    try {
      const url=type==="Edit"?ADMIN_Rooms_URL.updateRoom(roomdata._id):ADMIN_Rooms_URL.createRoom
      const response = await axios({
        method:type==="Edit"?"put":"post",
        url,
        data:createData,
        headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
      });
      console.log(response)
      toast.success(type === "Edit" ? "Room Updated Successfully" : "Room Created Successfully");
      navigate("/dashBaord/room-list")
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacilities();
    // if (type === "Edit" && roomdata.facilities) {
    //   const selectedFacilitiesIds = roomdata.facilities.map((facility: any) => facility._id);
    //   setFacilitiesId(selectedFacilitiesIds);
    // }
  },[]);
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ width: "100%", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Stack spacing={2} sx={{ marginBlock: "20px" }}>
            <TextField 
              placeholder="Room Number"
              variant="outlined"
              fullWidth
              {...register("roomNumber", { required: "Room number is required" })}
              // defaultValue={type==="Edit"?roomdata.roomNumber:""}
              error={!!errors.roomNumber}
              helperText={errors.roomNumber ?<span style={{color:"red"}}>{errors.roomNumber.message}</span>  : <span style={{color:"red"}}>{"room is already exists"}</span>}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField
              variant="outlined"
              placeholder="Price"
              fullWidth
              {...register("price", { required: "Price is required" })}
              // defaultValue={type==="Edit"?roomdata.price:""}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ""}
            />
            <TextField
              variant="outlined"
              placeholder="Capacity"
              fullWidth
              {...register("capacity", { required: "Capacity is required" })}
              // defaultValue={type==="Edit"?roomdata.capacity:""}
              error={!!errors.capacity}
              helperText={errors.capacity ? errors.capacity.message : ""}
            />
          </Stack>

          <Stack direction="row" spacing={2} sx={{ marginBlock: "20px" }}>
            <TextField
              variant="outlined"
              placeholder="Discount"
              fullWidth
              {...register("discount", { required: "Discount is required" })}
              // defaultValue={type==="Edit"?roomdata.discount:""}
              error={!!errors.discount}
              helperText={errors.discount ? errors.discount.message : ""}
            />
            <FormControl fullWidth>
              <Select
                multiple
                value={facilitiesId}
                {...register("facilities",{required:"facilities is required"})}
                // defaultValue={type==="Edit"?roomdata.facilities:""}
                onChange={(e) => setFacilitiesId(e.target.value as string[])}
                // renderValue={(selected) => 
                //   selected
                //     .map(id => facilities.find(facility => facility._id === id)?.name) // Get the name from the ID
                //     .join(", ") // Join them as a comma-separated string
                // }   
                >
                {facilities.map((facility: any) => (
                  <MenuItem key={facility._id} value={facility._id}>
                    {facility.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.facilities && (
                <FormHelperText error>{errors.facilities.message}</FormHelperText>
              )}
            </FormControl>
          </Stack>

          <Stack>
            <input
              type="file"
              accept="image/*"
              multiple
              style={{ display: 'block' }}
              id="upload-button"
              {...register("imgs",{required:"Please upload at least one image"})}
            />
            <label htmlFor="upload-button">
              <Box>
                <Typography sx={{ paddingBlock: "80px" }} variant="body2">
                  Drag & Drop or <span style={{ color: '#1976d2', cursor: 'pointer' }}>Choose Room Images</span> to Upload
                </Typography>
              </Box>
            </label>
          </Stack>

          <Stack direction="row" justifyContent="end" spacing={2} mt={2}>
            <Button variant="outlined">
              <Link to="/dashBaord/room-list">Cancel</Link>
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
}
