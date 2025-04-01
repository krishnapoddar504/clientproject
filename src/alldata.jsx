import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./apis/Myapis";

function Alldata() {
  const [a, b] = useState([]);
  const datafech = () => {
    axios.get(`${url}/allproduct`).then((d) => {
      console.log(d.data);
      b(d.data);
    });
  };
  useEffect(() => {
    datafech();
  }, []);
  return (
    <div className="container-fluid col-12 ms-5 ">
      <div className="row">
        {a.map((p) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h1>{p.id}</h1>
                <h5 className="card-title">{p.company} </h5>
                <img src={p.imgge} alt="Product Image" />
                <p className="card-text">{p.item_name}</p>
                <div className="card1">
                  <p>Original Price</p>
                  <p>Current Price</p>
                </div>
                <div className="card1">
                  <p>₹{p.original_price}</p>
                  <p>₹{p.current_price}</p>
                </div>

                <a href="#" className="btn btn-primary btn1">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Alldata;
