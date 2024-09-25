export interface RoomsListResponse  {
  data: {
    rooms: RoomsListView[];
    totalCount: number;
  };
}

export interface RoomsListView  {
  capacity: number;
  createdAt: string;
  createdBy: createdBy;
  discount: number;
  price: number;
  roomNumber: string;
  updatedAt: string;
  _id: string;
  images:string[]
}

interface createdBy {
  userName: string;
  _id: string;
}
