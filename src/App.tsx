import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NotFound from './modules/shared/component/notFound/NotFound';
import Login from './modules/authontication/component/logIn/Login';
import ResetPass from './modules/authontication/component/resetPass/ResetPass';
import Register from './modules/authontication/component/register/Register';
import AuthLayOut from './modules/shared/component/authLayout/AuthLayout';
import LandingPage from './modules/uers/components/LandingPage/LandingPage';
import Booking from './modules/uers/components/booking/Booking';
import ChangePass from './modules/uers/components/changePass/ChangePass';
import DetailsPage from './modules/uers/components/detailsPage/DetailsPage';
import Explore from './modules/uers/components/explore/Explore';
import Favorites from './modules/uers/components/favorites/Favorites';
import UserMasterLayout from './modules/shared/component/userMasterLayout/UserMasterLayout';
import AdminMasterLayout from './modules/shared/component/adminMasterLayout/AdminMasterLayout';
import Home from './modules/admin/components/home/Home';
import Ads from './modules/admin/components/ads/Ads';
import BookingList from './modules/admin/components/bookingList/BookingList';
import FacilitiesList from './modules/admin/components/Facilities/Components/FacilitiesList/FacilitiesList';
import RoomsList from './modules/admin/components/roomList/RoomsList';
import AddOrEditRooms from './modules/admin/components/rooms/AddOrEditRooms';
import UsersList from './modules/admin/components/usersList/UsersList';
import { imgResetpass } from './assets/ParrelAssets/Parrel';
import ForgetPass from './modules/authontication/component/forgetPassword/forgetPassword';
import ProtectedRoute from './modules/shared/component/protectedRoute/ProtectedRoute';

function App() {
  const routes = createBrowserRouter([
    {
      // --------------------------------------Auth-LayOut
      path: '/AuthLayOut',
      element: <AuthLayOut />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'reset-Pass',
          element: <ResetPass imag={imgResetpass} />,
        },
        { path: 'register', element: <Register /> },
        // { path: 'verify-account', element: <VerifyAccount /> },
        {
          path: 'forget-password',
          element: <ForgetPass />,
        },
      ],
    },
    {
      // --------------------------------------User-Master-Layout
      path: '/',
      element: <UserMasterLayout />,

      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: 'landing-Page',
          element: <LandingPage />,
        },
        {
          path: 'booking',
          element: (
            <ProtectedRoute>
              <Booking />,
            </ProtectedRoute>
          ),
        },
        {
          path: 'change-Pass',
          element: (
            <ProtectedRoute>
              <ChangePass />,
            </ProtectedRoute>
          ),
        },
        {
          path: 'details-Page',
          element: <DetailsPage />,
        },
        {
          path: 'explore',
          element: <Explore />,
        },
        {
          path: 'favorite',
          element: <Favorites />,
        },
      ],
    },

    {
      // --------------------------------------admin-Master-Layout
      path: '/dashBaord',
      element: (
        <ProtectedRoute>
          <AdminMasterLayout />,
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'ads-list',
          element: <Ads />,
        },
        {
          path: 'booking',
          element: <BookingList />,
        },
        {
          path: 'facilities-List',
          element: <FacilitiesList />,
        },
        { path: 'facility-edit/:id', element: <FacilitiesList /> },
        {
          path: 'room-list',
          element: <RoomsList />,
        },
        {
          path: 'add-edit-rooms',
          element: <AddOrEditRooms />,
        },
        {
          path: 'users-List',
          element: <UsersList />,
        },
        {
          path: 'change-pass',
          element: <ChangePass />,
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
