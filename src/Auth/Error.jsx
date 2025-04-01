import React from "react";
import { Link } from "react-router-dom";
import { GiAngryEyes } from "react-icons/gi";
import "./Error.css";

function Myerrarpage() {
  return (
    <div className="container-fluid text-center cus-btn2">
      <div className="row cus-btn3">
        <div className="head">
          <div className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
            <span className="eye1">
              <GiAngryEyes />
            </span>
          </div>
        </div>
        <h1 className="cus-err1">404</h1>
        <h2>Page Not Found</h2>
        <p>
          <b>
            The page you are looking more might have beeen removede had its name
            changed or is temporarily unavailable.
          </b>
        </p>
        <div className="cus-btn2">
          <Link to="/mainpage" className="btn btn btn-primary border cus-btn1">
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Myerrarpage;
