const BASE_URL = "https://e-commerce-node-js-zeta.vercel.app/api/v0/";

// ........................................................................................admin

// .....................................................admin-Users
const BASE_Admin_Users = `${BASE_URL}/admin/users`;

export const Users_URL = {
  login: `${BASE_Admin_Users}/login`,
  resetPassword: `${BASE_Admin_Users}/reset-password`,
  changePassword: `${BASE_Admin_Users}/change-password`,
  forgetPassword: `${BASE_Admin_Users}/forgot-password`,
  createUser: `${BASE_Admin_Users}`,
  userProfile: (id) => `${BASE_Admin_Users}/${id}`,

  //    Check All Users
  allUsers: (id) => `${BASE_Admin_Users}?page=1&size=10`,
};

// .....................................................admin-Room
const BASE_Admin_Rooms = `${BASE_URL}/admin/rooms`;

export const Rooms_URL = {
  createRoom: `${BASE_Admin_Rooms}`,
  updateRoom: (id) => `${BASE_Admin_Rooms}/${id}`,
  GetRoomDetails: (id) => `${BASE_Admin_Rooms}/${id}`,
  deleteRoom: (id) => `${BASE_Admin_Rooms}/${id}`,

  //    Check All Users
  getAllRooms: `${BASE_Admin_Rooms} ?page=1&size=10`,
};

// .....................................................admin-Booking
const BASE_Admin_Booking = `${BASE_URL}/admin/rooms`;

export const Booking_URL = {
  getBookingDetails: `${BASE_Admin_Booking}`,
  deleteBooking: (id) => `${BASE_Admin_Booking}/${id}`,
  GetAllBookig: `${BASE_Admin_Booking}?page=1&size=10`,
};

// .....................................................admin-RoomsFacility

const BASE_Admin_RoomFacility = `${BASE_URL}/admin/room-facilities`;

export const RoomFacility_URL = {
  createRoomFacility: `${RoomFacility_URL}`,
  getAllRoomFacility: `${RoomFacility_URL}`,
  roomFaciltyDetails: (id) => `${RoomFacility_URL}/${id}`,
  deleteRoomFacilty: (id) => `${RoomFacility_URL}/${id}`,
  updateRoomFacilty: (id) => `${RoomFacility_URL}/${id}`,
};

// .....................................................admin-Ads

const BASE_Admin_Ads = `${BASE_URL}/admin/ads`;

export const Ads_URL = {
  createAds: `${BASE_Admin_Ads}`,
  getAllAds: `${BASE_Admin_Ads}`,
  getAdsDetails: (id) => `${BASE_Admin_Ads}/${id}`,
  deleteAds: (id) => `${BASE_Admin_Ads}/${id}`,
  updateAds: (id) => `${BASE_Admin_Ads}/${id}`,
};

// .....................................................admin-Dashboard

const BASE_Admin_Dashboard = `${BASE_URL}/admin/dashboard`;

export const Dashboard_URL = {
  Charts: `${BASE_Admin_Dashboard}`,
};

// ........................................................................................Portal

// .....................................................portal-Rooms

const BASE_Portal_Rooms = `${BASE_URL}/portal/rooms`;

export const rooms_URL = {
  getAllRooms: `${BASE_Portal_Rooms}/available?page=1&size=10&startDate=2023-01-20&endDate=2023-01-30`,
  getRoomDetails: (id) => `${BASE_Portal_Rooms}/${id}`,
};

// .....................................................portal-Booking

const BASE_Portal_Booking = `${BASE_URL}/portal/booking`;

export const booking_URL = {
  createBooking: `${BASE_Portal_Booking}`,
  getAllBooking: `${BASE_Portal_Booking}/my`,
  getbookingDetails: (id) => `${BASE_Portal_Booking}/${id}`,
  payBooking: (id) => `${BASE_Portal_Booking}/${id}/pay`,
};

// .....................................................portal-User
// .....................................................portal-Ads
// .....................................................portal-FavoriteRooms
// .....................................................portal-RoomComments
// .....................................................portal-Reviews
