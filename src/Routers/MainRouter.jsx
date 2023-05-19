import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/HomePages/Home";
import AllToys from "../Pages/NavBar/AllToys";
import MyToys from "../Pages/NavBar/MyToys";
import AddAToys from "../Pages/NavBar/AddAToys";
import Blog from "../Pages/NavBar/Blog";
import LoginPage from "../Pages/NavBar/LoginPage";
import Registration from "../Pages/NavBar/Registration";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allToys",
        element: <AllToys />,
      },
      {
        path: "myToys",
        element: <MyToys />,
      },
      {
        path: "addAToys",
        element: <AddAToys />,
      },
      {
        path: "blog",
        element: (
          <PrivetRouter>
            {" "}
            <Blog />
          </PrivetRouter>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
export default router;
