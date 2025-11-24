import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import AuthLaout from "../layout/AuthLaout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider";
import AboutUs from "../pages/AboutUs";
import SendParcel from "../pages/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: "rider",
          element: <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        },
        {
          path: "/about",
          element: <AboutUs></AboutUs>
        },
        {
          path: "send-parcel",
          element: <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>,
          loader: () => fetch('/warehouses.json').then(res=> res.json())
        },
        {
          element: <Coverage></Coverage>,
          path: '/coverage',
          loader: () => fetch('/warehouses.json').then(res=> res.json())
        }
    ]
  },
  {
    path: "/",
    element: <AuthLaout></AuthLaout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
]);