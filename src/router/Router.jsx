import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "../Layout";
import Login from "../Profile/Login";
import Signup from "../Profile/Signup";

import HomePage from "../home/HomePage";
import Terms from "../terms/Conditions/Terms";
import About from "../About us/About";

import Data from "../data/Data";
import SingleProduct from "../single-product/SingleProduct";
import CartPage from "../Cart/Bill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/homepage"} />,
      },
      {
        path: "/homepage",
        element: <HomePage />,
      },

      {
        path: "/data",
        element: <Data />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
      {
        path: "*",
        element: (
          <h1 style={{ color: "red", textAlign: "center", margin: "10% auto" }}>
            {" "}
            Oops! Page is not found
          </h1>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1 style={{ color: "red", textAlign: "center", margin: "10% auto" }}>
        {" "}
        Oops! Page is not found
      </h1>
    ),
  },
]);
export default router;
