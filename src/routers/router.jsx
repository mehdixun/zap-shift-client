import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import AuthLaout from "../layout/AuthLaout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

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
          element: <Coverage></Coverage>,
          path: '/coverage',
          loader: () => fetch('/warehouses.json')
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