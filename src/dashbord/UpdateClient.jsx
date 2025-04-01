import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../apis/Myapis";
import {
  MdDelete,
  MdOutlineRateReview,
  MdOutlineStreetview,
} from "react-icons/md";
import { Link } from "react-router-dom";

function UpdateClient() {
  const [user, setuser] = useState([]);
  const alldata = async () => {
    await axios.get(`${url}/alldata`).then((d) => {
      setuser(d.data);
    });
  };

  useEffect(() => {
    alldata();
  }, []);

  const deleterecord = async (id) => {
    await axios.delete(`${url}/removeUser/${id}`).then((d) => {
      alldata();
    });
  };

  return (
    <table className="table table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">Sno</th>
          <th scope="col">FullName</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
          <th scope="col">Password</th>
          <th scope="col">Gender</th>
          <th scope="col">Profile Picture</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {user.map((d, sn = 1) => {
          return (
            <tr key={d._id}>
              <th scope="row">{++sn}</th>
              <td>{d.fullname}</td>
              <td>{d.email}</td>
              <td>{d.dob}</td>
              <td>{d.pass}</td>
              <td>{d.gender}</td>
              <td>
                <img src={d.purl} width={30} />
              </td>
              <td className="text-end">
                <span className="badge text-bg-primary p-2">
                  <MdOutlineStreetview />
                </span>
                <Link
                  to={"/updateclient/" + d._id}
                  className="badge text-bg-warning ms-2 p-2"
                >
                  <MdOutlineRateReview />
                </Link>
                <span
                  className="badge text-bg-danger ms-2 p-2"
                  onClick={() => deleterecord(d._id)}
                >
                  <MdDelete />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UpdateClient;
