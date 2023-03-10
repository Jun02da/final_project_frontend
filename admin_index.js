import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/AccountDelete.css";
import "./styles/Announcement.css";
import "./styles/Admin.css";
import Admin from "./components/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>
);
