import { FacilityListRespones } from "../Facilities/FacilityList";

export interface DropdownMenuProps {
  handleOpenDelete: (facilityId:string) => void;
  handleOpen: () => void;
  list: FacilityListRespones[];
}
