import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import "./index.css";

// basename for github pages
const basename = "/employee-manager-mern";

const router = createBrowserRouter([
  {
    // This is the root route
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecordList />,
      },
    ],
  },
  {
    // our edit route
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />,
      },
    ],
  },
  {
    // our create route
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Record />,
      },
    ],
  },
],
{basename}
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
