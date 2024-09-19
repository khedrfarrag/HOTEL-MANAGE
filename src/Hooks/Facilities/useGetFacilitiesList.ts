import axios from 'axios';
import { ADMIN_RoomFacility_URL } from '../../constants/END-POINTS';
import { useEffect, useState } from 'react';
import { FacilityListRespones } from '../../Interfaces/Facilities/FacilityList';

export default function useGetFacilitiesList() {
  const [facilitiesList, setFacilitiesList] = useState<FacilityListRespones[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [counterLoading, setCounterLoadind] = useState<number>(0);

  const getFacilitiesList = async () => {
    try {
        if (counterLoading == 0 ) {
            setLoading(true);
            setCounterLoadind(1);
        }
      const response = await axios.get(
        ADMIN_RoomFacility_URL.getAllRoomFacility,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRkZWFmMTY0NzVlMmQ1MGRhNWFkNzYiLCJyb2xlIjoiYWRtaW4iLCJ2ZXJpZmllZCI6ZmFsc2UsImlhdCI6MTcyNjczNjc2NCwiZXhwIjoxNzI3OTQ2MzY0fQ.mlYDMSFEE3RbVMFXYXVHaWtEtB-b6kwvLlHL038kqiw`,
          }, //${localStorage.getItem('userToken')}
        }
      );
      setFacilitiesList(response.data.data.facilities);
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    getFacilitiesList();
  }, []);


   return { facilitiesList, loading , getFacilitiesList };
}
