import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AuthLayOut from "./modules/shared/component/authLayout/AuthLayout";
import NotFound from "./modules/shared/component/notFound/NotFound";
import Login from "./modules/authontication/component/logIn/Login";
import ResetPass from "./modules/authontication/component/resetPass/ResetPass";
import Register from "./modules/authontication/component/register/Register";
import VerifyAccount from "./modules/authontication/component/verifyAccount/VerifyAccount";
import ForgetPass from "./modules/authontication/component/forgetPass/ForgetPass";
import MasterLayOut from "./modules/shared/component/masterLayout/MasterLayOut";
import HotelsList from "./modules/hotels/component/hotelsList/HotelsList";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayOut />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "reset-Pass", element: <ResetPass /> },
        { path: "register", element: <Register /> },
        { path: "verify-account", element: <VerifyAccount /> },
        {
          path: "forget-pass",
          element: <ForgetPass />,
        },
      ],
    },

    {
      path: "/layout-Master",
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
