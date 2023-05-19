import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./Routers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/MainRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-24">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
