import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import User from "./components/User";
import Login from "./login/Login";
import Error from "./Error";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import LoggedOut from "./components/LoggedOut";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <React.StrictMode>
        <Routes>
          <Route path="/*" element={<Error />} />
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<App />} />
          <Route path="/user:id" element={<User />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/loggedout" element={<LoggedOut />} />
        </Routes>
      </React.StrictMode>
    </HashRouter>
  </React.StrictMode>
);
