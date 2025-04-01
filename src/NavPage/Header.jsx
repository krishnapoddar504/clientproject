import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BiLeftIndent } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

function Header() {
  return (
    <Fragment>
      <div className="container-fluid col-lg-12 text-white nav1">
        <div className="row">
          <header className="p-3">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a
                  href="/"
                  className="d-flex align-items-center mb-2 mb-lg-0 link-warning text-decoration-none"
                >
                  <span
                    className="bi me-2"
                    width="40"
                    height="32"
                    role="img"
                    aria-label="Bootstrap"
                  >
                    <Link to="/">
                      <img
                        src="photo/backBo.png"
                        width={50}
                        height={50}
                        className="rounded-circle"
                      />
                    </Link>
                  </span>
                </a>

                <ul className="nav col-16 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-white"></ul>

                <form
                  className="col-6 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                  role="search"
                >
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </form>

                <div className="dropdown text-end">
                  <a
                    href="#"
                    className="d-block link-light text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
