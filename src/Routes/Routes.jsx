import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/SEcret/Secret";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "reservations",
        element: <Reservation />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
