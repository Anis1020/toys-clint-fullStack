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
import ViewDetails from "../Pages/ViewDetails";

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
        loader: () =>
          fetch("https://assignment-11-server-site-kappa.vercel.app/alltoys"),
      },
      {
        path: "myToys",
        element: <MyToys />,
        // loader: () => fetch("http://localhost:5000/mytoys"),
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
        path: "viewDetails/:_id",
        element: (
          <PrivetRouter>
            <ViewDetails></ViewDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-site-kappa.vercel.app/alltoys/${params._id}`
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
