import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ForgetPass from './modules/authontication/component/forgetPass/ForgetPass';
import Login from './modules/authontication/component/logIn/Login.tss';
import Register from './modules/authontication/component/register/Register';
import ResetPass from './modules/authontication/component/resetPass/ResetPass';
import VerifyAccount from './modules/authontication/component/verifyAccount/VerifyAccount';
import FacilitiesList from './modules/Facilities/Components/FacilitiesList/FacilitiesList';
import HotelsList from './modules/hotels/component/hotelsList/HotelsList';
import AuthLayOut from './modules/shared/component/authLayout/AuthLayout';
import MasterLayOut from './modules/shared/component/masterLayout/MasterLayOut';
import NotFound from './modules/shared/component/notFound/NotFound';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
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
        { path: 'reset-Pass', element: <ResetPass /> },
        { path: 'register', element: <Register /> },
        { path: 'verify-account', element: <VerifyAccount /> },
        {
          path: 'forget-pass',
          element: <ForgetPass />,
        },
      ],
    },
    {
      path: '/layout-Master',
      element: <MasterLayOut />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HotelsList />,
        },
        { path: 'facility-list', element: <FacilitiesList /> },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer autoClose={2500} />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
