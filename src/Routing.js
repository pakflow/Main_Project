import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./components/Contexts/authContext";
import AdminPage from "./pages/AdminPage";
import All from "./pages/All";
import Home from "./pages/Home";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/all",
      element: <All />,
      id: 2,
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    // {
    //     link: "/edit/:id",
    //     element: <EditProduct />,
    //     id: 2,
    // },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {user
        ?
         ADMIN_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                user.email === "bboy.mars.97@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="+" />
                )
              }
            />
          ))
         : null }
    </Routes>
  )
};

export default Routing;
