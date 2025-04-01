import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaUser, FaUnlockAlt, FaEnvelope } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import { url } from "../apis/Myapis";
import { toast, ToastContainer } from "react-toastify";

function ClientEditpage() {
  const [isPassword, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!isPassword);
  };

  const { id } = useParams();
  const customnavigat = useNavigate();
  const [myform, setMyform] = useState({
    fullname: "",
    email: "",
    pass: "",
  });
  const chaninput = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setMyform((uu) => ({
      ...uu,
      [name]: value,
    }));
  };

  const singleremocrd = () => {
    axios.get(`${url}/singlereocrd/${id}`).then((d) => {
      console.log(d.data);
      setMyform(d.data);
    });
  };
  useEffect(() => {
    singleremocrd();
  }, []);

  const submiteditpage = async () => {
    await axios.patch(`${url}/edituser/${id}`, myform).then((d) => {
      console.log(d.data);
      toast.success("Update successfully", { autoCloce: 2000 });
      setTimeout(() => {
        customnavigat("/mainpage/updateclient");
      }, 2000);
    });
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
                    <h2 className={`${style.RegisterLogo}`}>Register</h2>
                  </div>
                  <div className="row">
                    <section className="col-12">
                      <FaUser className={`${style.FaUsers}`} />
                      <input
                        type="text"
                        id={`${style.names}`}
                        placeholder="Full Name"
                        name="fullname"
                        value={myform.fullname}
                        onInput={chaninput}
                      />
                    </section>
                    <section className="col-12">
                      <FaEnvelope className={`${style.FaUsers}`} />
                      <input
                        type="email"
                        id={`${style.email}`}
                        placeholder="you@examlpe.com"
                        name="email"
                        value={myform.email}
                        onInput={chaninput}
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
                        onInput={chaninput}
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
                    <section className={`${style.remem} col-md-6 ms-2`}>
                      <input type="checkbox" />
                      <span className="ms-1">Remember Me</span>
                    </section>
                  </div>
                  <div className="row ">
                    <div className="col-12">
                      <button
                        className={`${style.Signbtn} btn btn-primary `}
                        onClick={submiteditpage}
                      >
                        Update
                      </button>
                    </div>
                    <div className="row">
                      <section className={`${style.lines}`}>
                        <span className={`${style.textLog}`}>
                          or register with
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

export default ClientEditpage;
