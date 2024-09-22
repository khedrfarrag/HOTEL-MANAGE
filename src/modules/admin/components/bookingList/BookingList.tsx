// import { Box } from '@mui/material';
// import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { PORTAL_Booking_URL } from '../../../../constants/END-POINTS';
import Title from './TitleBoking/Title';
import TableWithAction from './TableWithAction/TableWithAction';
import DeleteConfirmationModal from '../../../shared/component/DeleteConfirmationModal/DeleteConfirmationModal';
import { AxiosErrorResponse } from '../../../../Interfaces/AuthResponse';
import { toast } from 'react-toastify';
import { Pagination, Stack } from '@mui/material';
type Params = {
  page: number;
  size: number;
};

export type BokingType = {
  booking: {
    _id: number;
    startDate: string;
    endDate: string;
    totalPrice: number;
    user: user;
  };
};

type user = {
  user: {
    _id: number;
    userName: string;
  };
};
type DataType = {
  data: BokingType;
};

export default function BookingList() {
  const [totalCount, settotalCount] = useState<number>();
  // totalCount	92
  // <<<<<<<<<<<<<<<<<<<<<<<<<handle delete fuctional   >>>>>>>>>>>>>>>>>>>>>>>>>>
  const [BokingId, setBokingId] = useState('');
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleCloseDelete = () => setOpenModalDelete(false);
  const handleOpenDelete = (BokingId: string) => {
    setBokingId(BokingId);
    setOpenModalDelete(true);
  };

  //<<<<<<<<<<<<<<<<<<<<<< Get BokingList from backEnd >>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [BokingList, SetBokingList] = useState<DataType>();
  const GetbokingList = async ({ page: page, size: size }: Params) => {
    try {
      const response = axios.get<DataType>(PORTAL_Booking_URL.getAllBooking, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        params: { page: page, size: size },
      });
      SetBokingList((await response).data.data.booking);
      settotalCount((await response).data.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Delete BokingList By Id>>>>>>>>>>>>>>>>>>>>>>>>>

  const DeleteBokingList = async () => {
    try {
      const response = await axios.delete(
        PORTAL_Booking_URL.getbookingDetails(BokingId),
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      console.log(response);
      handleCloseDelete();
      GetbokingList({ page: 1, size: 5 });
      toast.success('BokingList deleted successfully.');
    } catch (error) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      toast.error(
        axiosError.response?.data.message ||
          'Failed to delete the BokingList. Please try again.'
      );
    }
  };

  useEffect(() => {
    GetbokingList({ page: 1, size: 5 });
  }, []);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    GetbokingList({ page: value, size: 5 });
  };
  return (
    <>
      <Title
        title="Booking Table Details"
        subTitle="You can check all details"
      />
      <DeleteConfirmationModal
        openModalDelete={openModalDelete}
        handleCloseDelete={handleCloseDelete}
        itemName={'BokingList'}
        handleDeleteModel={DeleteBokingList}
      />

      <TableWithAction
        Bokinglist={BokingList}
        handleOpenDelete={handleOpenDelete}
      />
      <Stack marginTop={15} width={'100%'}>
        <Pagination
          count={totalCount}
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
