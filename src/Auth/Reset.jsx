import React, { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { FaUser, FaUnlockAlt, FaEnvelope } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

function Reset() {
  const [isPassword, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!isPassword);
  };
  const [isPasswords, setPasswords] = useState(false);
  const togglePasswords = () => {
    setPasswords(!isPasswords);
  };
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
                    <h2 className={`${style.RegisterLogo}`}>Reset password?</h2>
                    <p>
                      Remember your passwor?{" "}
                      <Link to="/" className={`${style.sign}`}>
                        Login here
                      </Link>
                    </p>
                  </div>
                  <div className="row">
                    <section className={`${style.colBorder} col-12`}>
                      <FaUser className={`${style.FaUsers}`} />
                      <input
                        type="text"
                        id={`${style.names}`}
                        placeholder="Full Name"
                      />
                    </section>
                    <section className={`${style.colBorder} col-12`}>
                      <FaUnlockAlt className={`${style.FaUsers}`} />
                      <input
                        type={isPassword ? "text" : "password"}
                        id={`${style.passs}`}
                        placeholder="New password"
                      />
                      <span onClick={togglePassword}>
                        {isPassword ? (
                          <IoEye className={`${style.FaUser}`} />
                        ) : (
                          <IoEyeOff className={`${style.FaUser}`} />
                        )}
                      </span>
                    </section>
                    <section className={`${style.colBorder} col-12`}>
                      <FaUnlockAlt className={`${style.FaUsers}`} />
                      <input
                        type={isPasswords ? "text" : "password"}
                        id={`${style.passs}`}
                        placeholder="Confirm new password"
                      />
                      <span onClick={togglePasswords}>
                        {isPasswords ? (
                          <IoEye className={`${style.FaUser}`} />
                        ) : (
                          <IoEyeOff className={`${style.FaUser}`} />
                        )}
                      </span>
                    </section>
                  </div>
                  <div className="row ">
                    <div className="col-12">
                      <Link
                        to="#"
                        className={`${style.Reset} btn btn-primary `}
                      >
                        Reset password
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

export default Reset;
