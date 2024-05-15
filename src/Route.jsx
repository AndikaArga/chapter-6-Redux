import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GameDetails from "./gameDetails";
import Login from "./LoginPage";
import UserPage from "./userPage";
import Register from "./register";
import FavoritBaru from "./FavoritBaru";
import GameBuy from "./GameBuy";
import History from "./History";

export default function Route() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserPage />,
    },
    {
      path: "/GameDetails",
      element: <GameDetails />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/User",
      element: <UserPage />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/GameBuy",
      element: <GameBuy />,
    },
    {
      path: "/History",
      element: <History />,
    },
    {
      path: "/Favorit",
      element: <FavoritBaru />,
    },
  ]);

  return <RouterProvider router={router} />;
}
