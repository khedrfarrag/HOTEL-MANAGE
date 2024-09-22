import { BokingType } from '../../modules/admin/components/bookingList/BookingList';
import { FacilityListRespones } from '../Facilities/FacilityList';

export interface DropdownMenuProps {
  handleOpenDelete: (facilityId: string) => void;
  handleOpen: () => void;
  list: FacilityListRespones[];
  // BokingList: BokingType[];
}
