import React, { useState } from "react";
import style from "./Login.module.css";
import { data, Link, useNavigate } from "react-router-dom";
import { FaUnlockAlt, FaEnvelope } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { url } from "../apis/Myapis";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const [isPassword, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!isPassword);
  };

  const mynav = useNavigate();
  const [myform, setMyform] = useState({
    email: "",
    pass: "",
  });
  const chainput = (e) => {
    const { name, value } = e.target;
    setMyform((uu) => ({
      ...uu,
      [name]: value,
    }));
  };

  const userlogin = async () => {
    const { email, pass } = myform;
    const datares = await fetch(`${url}/loginpage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        pass,
      }),
    });
    const resdata = await datares.json();
    // console.log(resdata);

    if (resdata.status === 456) {
      toast.error("email not found", { autoClose: 1000, theme: "dark" });
    }
    if (resdata.status === 466) {
      toast.error("record not found", { autoClose: 1000, theme: "dark" });
    }
    if (resdata.status === 240) {
      toast.success("Welcome to successfully login", {
        autoClose: 2000,
        theme: "light",
      });
      setTimeout(() => {
        mynav("/mainpage");
      }, 2000);
    }
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
                <ToastContainer />
              </div>
              <div className="row">
                <div>
                  <div className="col-12 p-3">
                    <h2 className={`${style.login}`}>Login</h2>
                    <p>
                      Doesn't have an account yet?{" "}
                      <Link to="/register" className={`${style.sign}`}>
                        Sign Up
                      </Link>
                    </p>
                  </div>
                  <div className="row">
                    <section className="col-12">
                      <FaEnvelope className={`${style.FaUsers}`} />
                      <input
                        type="email"
                        id={`${style.email}`}
                        placeholder="you@examlpe.com"
                        name="email"
                        value={myform.email}
                        onInput={chainput}
                      />
                    </section>
                    <section className="col-12">
                      <FaUnlockAlt className={`${style.FaUsers}`} />
                      <input
                        type={isPassword ? "text" : "password"}
                        id={`${style.passs}`}
                        placeholder="Enter Your Password"
                        name="pass"
                        value={myform.pass}
                        onInput={chainput}
                      />
                      <span onClick={togglePassword}>
                        {isPassword ? (
                          <IoEye className={`${style.FaUser}`} />
                        ) : (
                          <IoEyeOff className={`${style.FaUser}`} />
                        )}
                      </span>
                    </section>
                  </div>
                  <div className="row">
                    <section className={`${style.remem} col-md-12 ms-2`}>
                      <input type="checkbox" />
                      <span className="ms-6">
                        Remember Me
                        <Link to="/forget" className={`${style.Forgot}`}>
                          Forgot Password?
                        </Link>
                      </span>
                    </section>
                    <section className="col-md-6">
                      <span className=" text-end"></span>
                    </section>
                  </div>
                  <div className="row ">
                    <div className="col-12">
                      <button
                        className={`${style.loginbtn} btn btn-primary `}
                        onClick={userlogin}
                      >
                        Log In
                      </button>
                    </div>
                    <div className="row">
                      <section className={`${style.line}`}>
                        <span className={`${style.textLog}`}>
                          or login with
                        </span>
                        <Link
                          to="https://www.facebook.com/profile.php?id=100072800464068 "
                          target="_blank"
                        >
                          <button className={`${style.facebookIcon}`} />
                        </Link>
                        <Link
                          to="https://x.com/Krishna73700411"
                          target="_blank"
                        >
                          <button className={`${style.XIcon}`} />
                        </Link>
                        <Link to="https://www.google.com/" target="_blank">
                          <button className={`${style.googleIcon}`} />
                        </Link>
                      </section>
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

export default Login;
