import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Titles from "./pages/Titles.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/titles",
    element: <Titles />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
