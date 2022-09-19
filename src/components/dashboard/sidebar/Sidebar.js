import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaRegListAlt, FaPlay } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar float-start pt-4">
      <div className="py-3 d-flex justify-content-center align-items-center mx-auto">
        <img src="assets/logo.png" alt="" />
      </div>
      {/** Dashboard Menu **/}
      <div className="sidebarMenu my-5">
        <ul className="sidebarList">
          <li>
            <NavLink
              to="/dashboard"
              className="sidebarListItem d-flex align-items-center"
              activeClassName="nav--active"
            >
              <AiFillHome className="sidebarIcon" />
              <span
                style={{ paddingLeft: "15px", fontSize: "15px" }}
                className="fw-bold"
              >
                Dashboard
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/log-complaint"
              className="sidebarListItem d-flex align-items-center"
              activeClassName="nav--active"
            >
              <FaRegListAlt className="sidebarIcon " />
              <span
                style={{ paddingLeft: "15px", fontSize: "15px" }}
                className="fw-bold"
              >
                Loan Management
              </span>
            </NavLink>
          </li>

          <li className="sidebarListItem d-flex align-items-center">
            <HiUsers className="sidebarIcon" />
            <span
              style={{ paddingLeft: "15px", fontSize: "15px" }}
              className="fw-bold"
            >
              User Management
            </span>
          </li>
          <li className="sidebarListItem d-flex align-items-center">
            <BsFillEnvelopeFill className="sidebarIcon" />
            <span
              style={{ paddingLeft: "15px", fontSize: "15px" }}
              className="fw-bold"
            >
              Credit Scoring
            </span>
          </li>
          <li className="sidebarListItem d-flex align-items-center">
            <FaPlay className="sidebarIcon" />
            <span
              style={{ paddingLeft: "15px", fontSize: "15px" }}
              className="fw-bold"
            >
              User Onboarding
            </span>
          </li>
          <li className="sidebarListItem d-flex align-items-center">
            <IoIosSettings className="sidebarIcon" />
            <span
              style={{ paddingLeft: "15px", fontSize: "15px" }}
              className="fw-bold"
            >
              Settings
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
