import { useState } from 'react';
import useGetFacilitiesList from '../../../../../Hooks/Facilities/useGetFacilitiesList';
import BasicModal from '../../../../../shared/component/ActionModal/ActionModal';
import TableWithAction from '../../../../../shared/component/TableWithAction/TableWithAction';
import Title from '../../../../../shared/component/Title/Title';
import DeleteConfirmationModal from '../../../../../shared/component/DeleteConfirmationModal/DeleteConfirmationModal';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import { AxiosErrorResponse } from '../../../../../../Interfaces/AuthResponse/AuthResponse';
import { ADMIN_RoomFacility_URL } from '../../../../../../constants/END-POINTS';

export default function FacilitiesList() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [facilityId, setFacilityId] = useState('');

  const { facilitiesList, loading, getFacilitiesList } = useGetFacilitiesList();

  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleCloseDelete = () => setOpenModalDelete(false);
  const handleOpenDelete = (facilityId: string) => {
    setFacilityId(facilityId);
    setOpenModalDelete(true);
  };

  const DeleteFacility = async () => {
    try {
      const response = await axios.delete(
        ADMIN_RoomFacility_URL.deleteRoomFacilty(facilityId),
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRkZWFmMTY0NzVlMmQ1MGRhNWFkNzYiLCJyb2xlIjoiYWRtaW4iLCJ2ZXJpZmllZCI6ZmFsc2UsImlhdCI6MTcyNjczNjc2NCwiZXhwIjoxNzI3OTQ2MzY0fQ.mlYDMSFEE3RbVMFXYXVHaWtEtB-b6kwvLlHL038kqiw`,
          }, //${localStorage.getItem('userToken')}
        }
      );
      console.log(response);
      handleCloseDelete();
      getFacilitiesList();
      toast.success('Facility deleted successfully.');
    } catch (error) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      toast.error(
        axiosError.response?.data.message ||
          'Failed to delete the facility. Please try again.'
      );
    }
  };

  return (
    <>
      <Title
        title="Facilities Table Details"
        subTitle="You can check all details"
        buttonText="Add New Facility"
        handleOpen={handleOpen}
      />

      <BasicModal
        open={open}
        handleClose={handleClose}
        title="Add Facility"
        getFacilitiesList={getFacilitiesList}
      />

      <DeleteConfirmationModal
        openModalDelete={openModalDelete}
        handleCloseDelete={handleCloseDelete}
        itemName={'Facility'}
        handleDeleteModel={DeleteFacility}
      />

      <TableWithAction
        list={facilitiesList}
        handleOpenDelete={handleOpenDelete}
        handleOpen={handleOpen}
      />
    </>
  );
}
