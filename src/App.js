import React, { Fragment } from "react";
import "./App.css";
import Header from "./NavPage/Header";
import Side from "./NavPage/Side";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Side />
          </div>
          <div className="col-md-8 outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
