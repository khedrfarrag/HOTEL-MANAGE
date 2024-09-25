import { useEffect, useState } from 'react';
import {
  RoomsListResponse,
  RoomsListView,
} from '../../../Interfaces/Rooms/RoomsResponse';
import axios, { AxiosError } from 'axios';
import { ADMIN_Rooms_URL } from '../../../constants/END-POINTS';
import { AxiosErrorResponse } from '../../../Interfaces/AuthResponse';
import { toast } from 'react-toastify';

export default function useGetRoomsList() {
  const [roomsList, setRoomsList] = useState<RoomsListView[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counterLoading, setCounterLoadind] = useState<number>(0);
  const getRoomsList = async () => {
    try {
      if (counterLoading == 0) {
        setLoading(true);
        setCounterLoadind(1);
      }
      const response = await axios.get<RoomsListResponse>(
        ADMIN_Rooms_URL.getAllRooms,
        {
          headers: { Authorization: localStorage.getItem('token') },
        }
      );
      setRoomsList(response.data.data.rooms);
    } catch (error) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      console.log(axiosError);
      toast.error(axiosError.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRoomsList();
  }, []);
  return { roomsList, loading, getRoomsList };
}
