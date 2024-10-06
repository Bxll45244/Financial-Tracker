import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../layoust/MainLayout.jsx";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx"; 
import Dashbard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", 
        element: <Home />, 
      },
      {
        path: "dashboard", 
        element: <Dashbard />, 
      },
      {
        path: "/add", 
        element: <Add />, 
      },
    ],
  },
]);

export default router;
