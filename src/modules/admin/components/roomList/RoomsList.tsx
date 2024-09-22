import axios from 'axios';
import { useState } from 'react';
import { ADMIN_Rooms_URL } from '../../../../constants/END-POINTS';

export default function RoomsList() {
  const [roomsList , setRoomsList] = useState([]);
  const getRoomsList = async (
    page: number, 
    size: number, 
  )=>{
    try {
      const response = await axios.get(ADMIN_Rooms_URL.getAllRooms, {
        headers: { Authorization: `Bearer ${localStorage.token}` } ,
        params: {page: page, size: size }
      });
      // const newArray:any = Array(response.data.totalNumberOfPages).fill().map((_, i) => i+1);
      // setArrayOfPages(newArray);
      console.log(response.data);
         setRoomsList(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return <div>RoomsList</div>;
}


