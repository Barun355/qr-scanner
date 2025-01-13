import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, SignIn, SignUp, Layout, Dashboard, CreateQR} from "./page"
import QRUrl from "./page/QRUrl";
import { DoubleLink, SingleLink } from "./components";
import { ToastContainer } from "react-toastify";
import ListQR from "./page/dashboard/ListQR";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/qr/:url",
    element: <QRUrl />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "create-qr",
        element: <CreateQR />,
        children: [
          {
            path: "sl",
            element: <SingleLink />
          },
          {
            path: "dl",
            element: <DoubleLink />
          }
        ]
      },
      {
        path: "list-qr",
        element: <ListQR />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
