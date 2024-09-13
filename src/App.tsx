import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.module.scss';
import { ToastContainer } from 'react-toastify';
import NotFound from './modules/shared/component/notFound/NotFound';
import Login from './modules/authontication/component/logIn/Login.tss';
import AuthLayOut from './modules/shared/component/authLayout/AuthLayout';
import ResetPass from './modules/authontication/component/resetPass/ResetPass';
import VerifyAccount from './modules/authontication/component/verifyAccount/VerifyAccount';
import ForgetPass from './modules/authontication/component/forgetPass/ForgetPass';
import MasterLayOut from './modules/shared/component/masterLayout/MasterLayOut';
import HotelsList from './modules/hotels/component/hotelsList/HotelsList';
import Register from './modules/authontication/component/register/Register';

function App() {
  const routes = createBrowserRouter([
    {
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
      path: '/',
      element: <MasterLayOut />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HotelsList />,
        },
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
