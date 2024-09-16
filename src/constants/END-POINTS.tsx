// ........................................................................................getToken
export const getToken = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
};

// ........................................................................................imagePathHelper
<<<<<<<< HEAD:src/constants/END-POINTS.ts
const imagePathHelper = (path:any) => {
========
const imagePathHelper = (path: any) => {
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
  return `${BASE_URL}${path}`;
};

// ........................................................................................Collections
const BASE_URL_COLLECTION = `https://api.getpostman.com/collections`;

export const COLLECTIONS_URL = {
  createCollection: `${BASE_URL_COLLECTION}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getCollection: (id:string) => `${BASE_URL_COLLECTION}/${id}`,
  deleteCollection: (id:string) => `${BASE_URL_COLLECTION}/${id}`,
  updateCollection: (id:string) => `${BASE_URL_COLLECTION}/${id}`,
========
  getCollection: (id: string) => `${BASE_URL_COLLECTION}/${id}`,
  deleteCollection: (id: string) => `${BASE_URL_COLLECTION}/${id}`,
  updateCollection: (id: string) => `${BASE_URL_COLLECTION}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
  createAllCollections: `${BASE_URL_COLLECTION}`,
};

// ................................................................................................baseURL
const BASE_URL = 'https://upskilling-egypt.com:3000/api/v0';

// ........................................................................................admin
// .....................................................admin-Users
const BASE_Admin_Users = `${BASE_URL}/admin/users`;

export const ADMIN_Users_URL = {
  login: `${BASE_Admin_Users}/login`,
  resetPassword: `${BASE_Admin_Users}/reset-password`,
  changePassword: `${BASE_Admin_Users}/change-password`,
  forgetPassword: `${BASE_Admin_Users}/forgot-password`,
  createUser: `${BASE_Admin_Users}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  userProfile: (id:string) => `${BASE_Admin_Users}/${id}`,
  allUsers: (page:string, size:string) => `${BASE_Admin_Users}?page=${page}&size=${size}`,
========
  userProfile: (id: string) => `${BASE_Admin_Users}/${id}`,
  allUsers: (page: string, size: string) =>
    `${BASE_Admin_Users}?page=${page}&size=${size}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................admin-Room
const BASE_Admin_Rooms = `${BASE_URL}/admin/rooms`;

export const ADMIN_Rooms_URL = {
  createRoom: `${BASE_Admin_Rooms}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  updateRoom: (id:string) => `${BASE_Admin_Rooms}/${id}`,
  GetRoomDetails: (id:string) => `${BASE_Admin_Rooms}/${id}`,
  deleteRoom: (id:string) => `${BASE_Admin_Rooms}/${id}`,
  getAllRooms: (page:string, size:string) => `${BASE_Admin_Rooms}?page=${page}&size=${size}`,
========
  updateRoom: (id: string) => `${BASE_Admin_Rooms}/${id}`,
  GetRoomDetails: (id: string) => `${BASE_Admin_Rooms}/${id}`,
  deleteRoom: (id: string) => `${BASE_Admin_Rooms}/${id}`,
  getAllRooms: (page: string, size: string) =>
    `${BASE_Admin_Rooms}?page=${page}&size=${size}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................admin-Booking
const BASE_Admin_Booking = `${BASE_URL}/admin/rooms`;

export const ADMIN_Booking_URL = {
  getBookingDetails: `${BASE_Admin_Booking}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  deleteBooking: (id:string) => `${BASE_Admin_Booking}/${id}`,
  GetAllBookig: (page:string, size:string) =>
========
  deleteBooking: (id: string) => `${BASE_Admin_Booking}/${id}`,
  GetAllBookig: (page: string, size: string) =>
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
    `${BASE_Admin_Booking}?page=${page}&size=${size}`,
};

// .....................................................admin-RoomsFacility

const BASE_Admin_RoomFacility = `${BASE_URL}/admin/room-facilities`;

export const ADMIN_RoomFacility_URL = {
  createRoomFacility: `${BASE_Admin_RoomFacility}`,
  getAllRoomFacility: `${BASE_Admin_RoomFacility}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  roomFaciltyDetails: (id:string) => `${BASE_Admin_RoomFacility}/${id}`,
  deleteRoomFacilty: (id:string) => `${BASE_Admin_RoomFacility}/${id}`,
  updateRoomFacilty: (id:string) => `${BASE_Admin_RoomFacility}/${id}`,
========
  roomFaciltyDetails: (id: string) => `${BASE_Admin_RoomFacility}/${id}`,
  deleteRoomFacilty: (id: string) => `${BASE_Admin_RoomFacility}/${id}`,
  updateRoomFacilty: (id: string) => `${BASE_Admin_RoomFacility}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................admin-Ads

const BASE_Admin_Ads = `${BASE_URL}/admin/ads`;

export const ADMIN_Ads_URL = {
  createAds: `${BASE_Admin_Ads}`,
  getAllAds: `${BASE_Admin_Ads}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getAdsDetails: (id:string) => `${BASE_Admin_Ads}/${id}`,
  deleteAds: (id:string) => `${BASE_Admin_Ads}/${id}`,
  updateAds: (id:string) => `${BASE_Admin_Ads}/${id}`,
========
  getAdsDetails: (id: string) => `${BASE_Admin_Ads}/${id}`,
  deleteAds: (id: string) => `${BASE_Admin_Ads}/${id}`,
  updateAds: (id: string) => `${BASE_Admin_Ads}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................admin-Dashboard

const BASE_Admin_Dashboard = `${BASE_URL}/admin/dashboard`;

export const ADMIN_Dashboard_URL = {
  Charts: `${BASE_Admin_Dashboard}`,
};

// ........................................................................................Portal
// .....................................................portal-Rooms

const BASE_Portal_Rooms = `${BASE_URL}/portal/rooms`;

export const Portal_rooms_URL = {
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getAllRooms: (page:string, size:string, startDate:string, endDate:string) =>
    `${BASE_Portal_Rooms}/available?page=${page}&size=${size}&startDate=${startDate}&endDate=${endDate}`,
  getRoomDetails: (id:string) => `${BASE_Portal_Rooms}/${id}`,
========
  getAllRooms: (
    page: string,
    size: string,
    startDate: string,
    endDate: string
  ) =>
    `${BASE_Portal_Rooms}/available?page=${page}&size=${size}&startDate=${startDate}&endDate=${endDate}`,
  getRoomDetails: (id: string) => `${BASE_Portal_Rooms}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................portal-Booking

const BASE_Portal_Booking = `${BASE_URL}/portal/booking`;

export const PORTAL_Booking_URL = {
  createBooking: `${BASE_Portal_Booking}`,
  getAllBooking: `${BASE_Portal_Booking}/my`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getbookingDetails: (id:string) => `${BASE_Portal_Booking}/${id}`,
  payBooking: (id:string) => `${BASE_Portal_Booking}/${id}/pay`,
========
  getbookingDetails: (id: string) => `${BASE_Portal_Booking}/${id}`,
  payBooking: (id: string) => `${BASE_Portal_Booking}/${id}/pay`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................portal-User
const BASE_PORTAL_USER = `${BASE_URL}/portal/users`;

export const PORTAL_USER_URL = {
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getUserProfile: (id:string) => `${BASE_PORTAL_USER}/${id}`,
========
  getUserProfile: (id: string) => `${BASE_PORTAL_USER}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
  createUser: `${BASE_PORTAL_USER}`,
  forgetPassword: `${BASE_PORTAL_USER}/forgot-password`,
  changePassword: `${BASE_PORTAL_USER}/change-password`,
  resetPassword: `${BASE_PORTAL_USER}/reset-password`,
  logIn: `${BASE_PORTAL_USER}/login`,
  googleAuth: `${BASE_PORTAL_USER}/auth/google`,
  faceBookAuth: `${BASE_PORTAL_USER}/auth/facebook`,
};

// .....................................................portal-Ads
const BASE_PORTAL_ADS = `${BASE_URL}/portal/ads`;

export const PORTAL_ADS_URL = {
  getAllAds: `${BASE_PORTAL_ADS}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getAdsDetails: (id:string) => `${BASE_PORTAL_ADS}/${id}`,
========
  getAdsDetails: (id: string) => `${BASE_PORTAL_ADS}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................portal-FavoriteRooms
const BASE_PORTAL_FavoriteRoom = `${BASE_URL}/portal/favorite-rooms`;

export const PORTAL_FavoriteRooms_URL = {
  getMyFavoriteRoom: `${BASE_PORTAL_FavoriteRoom}`,
  addToFavorite: `${BASE_PORTAL_FavoriteRoom}`,
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  removeFavorite: (id:string) => `${BASE_PORTAL_FavoriteRoom}/${id}`,
========
  removeFavorite: (id: string) => `${BASE_PORTAL_FavoriteRoom}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................portal-RoomComments
const BASE_PORTAL_RoomComments = `${BASE_URL}/portal/room-comments`;

export const PORTAL_RoomComments_URL = {
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getAllRoomComments: (id:string) => `${BASE_PORTAL_RoomComments}/${id}`,
  createComment: `${BASE_PORTAL_RoomComments}`,
  removeComments: (id:string) => `${BASE_PORTAL_RoomComments}/${id}`,
  updateComments: (id:string) => `${BASE_PORTAL_RoomComments}/${id}`,
========
  getAllRoomComments: (id: string) => `${BASE_PORTAL_RoomComments}/${id}`,
  createComment: `${BASE_PORTAL_RoomComments}`,
  removeComments: (id: string) => `${BASE_PORTAL_RoomComments}/${id}`,
  updateComments: (id: string) => `${BASE_PORTAL_RoomComments}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};

// .....................................................portal-Reviews
const BASE_PORTAL_REVIEWS = `${BASE_URL}/portal/room-reviews`;

export const PORTAL_REVIEWS_URL = {
<<<<<<<< HEAD:src/constants/END-POINTS.ts
  getAllRoomReviews: (id:string) => `${BASE_PORTAL_REVIEWS}/${id}`,
  createreview: `${BASE_PORTAL_REVIEWS}`,
  updateComment: (id:string) => `${BASE_PORTAL_REVIEWS}/${id}`,
========
  getAllRoomReviews: (id: string) => `${BASE_PORTAL_REVIEWS}/${id}`,
  createreview: `${BASE_PORTAL_REVIEWS}`,
  updateComment: (id: string) => `${BASE_PORTAL_REVIEWS}/${id}`,
>>>>>>>> 72462e8e4cc8685dacb8efea349a674832d0d85c:src/constants/END-POINTS.tsx
};
