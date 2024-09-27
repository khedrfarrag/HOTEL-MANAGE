export interface RoomsListRespones {
    createdAt: string;
    createdBy: createdBy;
    name: string;
    updatedAt: string;
    _id: string;
  }
  
  interface createdBy{
      userName:string;
      _id:string
  }