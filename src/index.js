import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Forget from "./Auth/Forget";
import Reset from "./Auth/Reset";
import Myerrarpage from "./Auth/Error";
import Alldata from "./alldata";
// import ClientRegistor from "./dashbord/ClientRegistor";
import UpdateClient from "./dashbord/UpdateClient";
import ClientEditpage from "./Auth/ClientEditpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/updateclient/:id" element={<ClientEditpage />} />
        <Route path="mainpage" element={<App />}>
          <Route path="" element={<Alldata />} />
          {/* <Route path="registers" element={<ClientRegistor />} /> */}
          <Route path="updateclient" element={<UpdateClient />} />
        </Route>
        <Route path="*" element={<Myerrarpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
