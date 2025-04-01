import React, { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

function Forget() {
  return (
    <div
      className={`${style.backImage} container-fluide justify-content-center`}
    >
      <div className={`${style.backImages} `}>
        <div className="row">
          <div className={`${style.center1} col-md-12`}>
            <div className={`${style.boder} center`}>
              <div className="row">
                <div className="col-md-5">
                  <section className={`${style.backBo} `} />
                </div>
              </div>
              <div className="row">
                <div>
                  <div className="col-12 p-3">
                    <h2 className={`${style.login}`}>Forgot Password?</h2>
                    <p>
                      Enter your email and we'll send you a link to
                      <Link to="/reset" className={`${style.reset}`}>reset your passwor.</Link>
                    </p>
                  </div>
                  <div className="row">
                    <section className="col-12">
                      <FaEnvelope className={`${style.FaUsers}`} />
                      <input
                        type="email"
                        id={`${style.email}`}
                        placeholder="you@examlpe.com"
                      />
                    </section>
                    <section className="col-12"></section>
                  </div>
                  <div className="row">
                    <section>
                      <p className="text-danger ms-3">
                        We cannot find your email.
                      </p>
                    </section>
                  </div>
                  <div className="row ">
                    <div className="col-12">
                      <Link
                        to="#"
                        className={`${style.loginbtn} btn btn-primary `}
                      >
                        Submit
                      </Link>
                    </div>
                    <div className="row">
                      <Link to='/' className={`${style.Back}`}>
                        <IoIosArrowBack />
                        <span>Back to Login</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
