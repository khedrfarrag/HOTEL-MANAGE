// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { ADMIN_RoomFacility_URL } from "../../../../constants/END-POINTS";
// import { useEffect, useState } from "react";
// import { Box, Button, FormControl, FormHelperText, Select, Stack, TextField, Typography } from "@mui/material";
// import { MenuItem } from "@mui/material"; 
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";


// export default function AddOrEditRooms() {
// const [facilites,Setfacilites]=useState([])
// const [facilitiesId, SetFacilitiesId] = useState<string[]>([]); // Use an array to store multiple IDs


//   const getfacilities=async()=>{
//     try{
//       const response=await axios.get(ADMIN_RoomFacility_URL.getAllRoomFacility,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})
//       console.log(response.data.data.facilities)
//       Setfacilites(response.data.data.facilities)
//       console.log(facilites)
//     }catch(error){
//       console.log(error)
//     }
    
//   }
  
//   type FormValues = {
    
//             roomNumber:string;
//             price:string;
//             capacity:string;
//             discount: string;
//             facilitiesId: string[];  // Array to store selected facility IDs
//             createdBy: string,
//             images: File[];      // Use FileList for file input
//             _id:number ,
//             createdAt: string,
//             updatedAt:string ,
// }

//   type Facility = {
//     _id: string;
//     name: string;
//   };
//   const converttoFomedata=(data:FormValues)=>{
// const formdata= new FormData()
// formdata.append("roomNumber",data.roomNumber)
// formdata.append("price",data.price)
// formdata.append("capacity",data.capacity)
// formdata.append("discount",data.discount)
// // const facilitiesArray = Array.isArray(data.facilities) ? data.facilities : [data.facilities];
// // facilitiesArray.forEach(facility => formdata.append("facilities", facility));
// facilitiesId.forEach((facility:string)=>{
//   formdata.append("facilities[]",facility)
//   console.log(facilites)

// })
// if (data.images && data.images.length > 0) {
//   data.images.forEach((image, index) => {
//     formdata.append(`images[${index}]`, image);
//   });
// }return formdata
//   }
//   const {register,handleSubmit,formState:{errors}}=useForm<FormValues>({ defaultValues: {roomNumber: "",price: "",capacity: "",discount: "",facilitiesId:[],images:[],},})
//   const onsubmit= async(data:FormValues)=>{
//     const createdata=converttoFomedata(data)
//     try{
//       const response=await axios.post( ADMIN_RoomFacility_URL.createRoomFacility,createdata,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})
//       toast.success("Room Created Successfully")
//       console.log(response)

//     }catch(error){
//       console.log(error)
//     }
//   }
//   useEffect(()=>{
//     getfacilities()
//     const facilityid:any=facilites.map((e)=>e._id)
//       SetFacilitiesId(facilityid)
//       console.log(facilitiesId)

//   },[])
  

//   return (
// <>
// <form onSubmit={handleSubmit(onsubmit)}>
//     <Box sx={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <Stack spacing={2} sx={{marginBlock:"20px"}}>
//     <TextField 
//     placeholder="roomNumber"
//     variant="outlined"
//     aria-label="roomNumber"
//     fullWidth
//     {...register("roomNumber",{required:"roomNumber is required"})}
//     error={!!errors.roomNumber}
//     helperText={errors.roomNumber?errors.roomNumber.message:""}
//     />
//       </Stack>
//       <Stack direction="row" spacing={2}>
//             <TextField
//               variant="outlined"
//               placeholder="price"
//               aria-label="price"
//               fullWidth
//               {...register("price",{required:"price is required"})}
//               error={!!errors.price}
//               helperText={errors.price?errors.price.message:""}
//             />
//             <TextField
//               variant="outlined"
//               placeholder="capacity"
//               aria-label="capacity"
//               fullWidth
//               {...register("capacity",{required:"capacity is required"})}
//               error={!!errors.capacity}
//               helperText={errors.capacity?errors.capacity.message:""}
//             />
//           </Stack>
//           <Stack direction="row" spacing={2} sx={{marginBlock:"20px"}}>
//             <TextField
//               variant="outlined"
//               placeholder="discount"
//               aria-label="discount"
//               fullWidth
//               {...register("discount",{required:"discount is required"})}

//             />
//             <FormControl fullWidth>

//              <Select {...register("facilities",{required:"facilities is required"})}
//               error={!!errors.facilities}
//              >
//                 {facilites.map((facility:Facility)=>{
//                   return (
// <MenuItem key={facility._id} value={facility._id}>{facility.name}</MenuItem>
//                   )

//                 })}
//                 {/* <MenuItem value="facility1">Facility 1</MenuItem>
//                 <MenuItem value="facility2">Facility 2</MenuItem>
//                 <MenuItem value="facility3">Facility 3</MenuItem> */}
//               </Select>
//               {errors.facilities&&(
//                 <FormHelperText error={true}>{errors.facilities.message}</FormHelperText>
//               )}
//               </FormControl>
//               {/* <FormControl fullWidth>

//              <Select {...register("facilities",{required:"facilities is required"})}
//               error={!!errors.facilities}
//              >
//                 {facilites.map((facility:Facility)=>{
//                   return (
// <MenuItem key={facility._id} value={facility._id}>{facility.name}</MenuItem>
//                   )

//                 })}
//                 {/* <MenuItem value="facility1">Facility 1</MenuItem>
//                 <MenuItem value="facility2">Facility 2</MenuItem>
//                 <MenuItem value="facility3">Facility 3</MenuItem> */}
//               {/* </Select>
//               {errors.facilities&&(
//                 <FormHelperText error={true}>{errors.facilities.message}</FormHelperText>
//               )}
//               </FormControl> */} 
//           </Stack>
//           {/* <Stack direction="row" spacing={2} sx={{ marginBlock: "20px" }}>
//             <TextField
//               variant="outlined"
//               placeholder="Room Name"  
//               fullWidth
//               {...register("name", { required: "Room name is required" })}
//               error={!!errors.name}
//               helperText={errors.name ? errors.name.message : ""}
//             />
//           </Stack> */}
//           <Stack>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               style={{ display: 'none' }}
//               id="upload-button"
//             />
//             <label htmlFor="upload-button">
//               <Box>
//                 <Typography sx={{paddingBlock:"80px"}} variant="body2">
//                   Drag & Drop or <span style={{ color: '#1976d2', cursor: 'pointer' }}>Choose a Room Images</span> to Upload
//                 </Typography>
//               </Box>
//             </label>
//           </Stack>
//           <Stack direction="row" justifyContent="end" spacing={2} mt={2}>
//             <Button variant="outlined">
//               <Link to="/dashBaord/room-list">Canceled</Link>
//             </Button>
//             <Button type="submit" variant="contained" color="primary">
//               Save
//             </Button>
//           </Stack>
        
//       </Box>

    
// </form>
// </>
//   )
// }
import axios from "axios";
import { useForm } from "react-hook-form";
import { ADMIN_RoomFacility_URL } from "../../../../constants/END-POINTS";
import { useEffect, useState } from "react";
import { Box, Button, FormControl, FormHelperText, Select, Stack, TextField, Typography } from "@mui/material";
import { MenuItem } from "@mui/material"; 
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddOrEditRooms() {
  const [facilities, setFacilities] = useState([]);
  const [facilitiesId, setFacilitiesId] = useState<string[]>([]); // Array to store selected facility IDs

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
    facilitiesId: string[];
    createdBy: string;
    images: File[];
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

    if (data.images && data.images.length > 0) {
      Array.from(data.images).forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
    }
    
    return formData;
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      roomNumber: "",
      price: "",
      capacity: "",
      discount: "",
      facilitiesId: [],
      images: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    const createData = convertToFormData(data);
    try {
      const response = await axios.post(ADMIN_RoomFacility_URL.createRoomFacility, createData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
      });
      toast.success("Room Created Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacilities();
  }, []);

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
              error={!!errors.roomNumber}
              helperText={errors.roomNumber ? errors.roomNumber.message : ""}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField
              variant="outlined"
              placeholder="Price"
              fullWidth
              {...register("price", { required: "Price is required" })}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ""}
            />
            <TextField
              variant="outlined"
              placeholder="Capacity"
              fullWidth
              {...register("capacity", { required: "Capacity is required" })}
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
            />
            <FormControl fullWidth>
              <Select
                multiple
                value={facilitiesId}
                {...register("facilitiesId",{required:"facilities is required"})}
                onChange={(e) => setFacilitiesId(e.target.value as string[])}
                renderValue={(selected) => selected.join(", ")}
              >
                {facilities.map((facility: any) => (
                  <MenuItem key={facility._id} value={facility._id}>
                    {facility.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.facilitiesId && (
                <FormHelperText error>{errors.facilitiesId.message}</FormHelperText>
              )}
            </FormControl>
          </Stack>

          <Stack>
            <input
              type="file"
              accept="image/*"
              multiple
              style={{ display: 'none' }}
              id="upload-button"
              {...register("images")}
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
              <Link to="/dashboard/room-list">Cancel</Link>
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
