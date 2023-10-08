import React from "react";
import "./App.css";
import { Home, SearchScreen, Watch } from "./pages";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Header, Profile } from "./components";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search/:query", element: <SearchScreen /> },
      { path: "/watch/:id", element: <Watch /> },
    ],
  },
  { path: "*", element: <Navigate to="/home" /> },
]);

export default appRouter;
