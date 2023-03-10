import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
=======
import "./css/index.css";
import "./css/board_index.css";
import "./css/AccountDelete.css";
import "./css/Announcement.css";
import "./css/Admin.css";
>>>>>>> 4237240b1c83c8cd962d780a60de52a08b7ef61d
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </React.StrictMode>
);
