import React from "react";
import "./topbar.css";
import { BiSearch } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const getEmail = localStorage.getItem("emailData");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="topbar float-end">
      <div className="topbarWrapper">
        <div className="topLeft d-flex flex-row align-items-center">
          <span className="heading fw-bold">Dashboard</span>
          <div className="searchBox position-relative ms-5 rounded d-flex align-items-center">
            <BiSearch className="position-absolute search-icon ms-3" />
            <input
              type="text"
              className="form-control search-text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <img
              src="assets/notification-bell.png"
              style={{ width: "37px", height: "37px" }}
            />
          </div>
          <div>
            <span className="topbarText me-3">{getEmail}</span>
          </div>
          <div className="dropdown">
            <div
              className=""
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <div className="border rounded-circle topbarAvatar">
                  <RiUserLine className="topbarIcon" />
                </div>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.28571 5L9 1"
                    stroke="#5B5B5B"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <div
                  className="dropdown-item active"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Log Out
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
