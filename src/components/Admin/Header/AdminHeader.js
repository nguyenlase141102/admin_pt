import React, { Fragment } from "react";
import "./AdminHeader.css";
import { FaSearch, FaPeriscope } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";

const AdminHeader = () => {
  const history = useHistory();

  return (
    <>
      <div className="topnav_admin">
        <div className="topNav_left">
          <FaSearch className="iconSearch" />
          <input type="text" placeholder="Search..." className="inputSearch" />
        </div>

        <h2
          style={{
            letterSpacing: "5px",
          }}
        >
          Trang Admin
        </h2>

        <div className="topNav_right">
          <FaPeriscope className="topNav_icon" />
          <AiFillSetting className="topNav_icon" />
          <div className="admin_logo">
            <FcBusinessman className="topNav_icon" />
            <span style={{ fontSize: "15px" }}>Admin</span>
          </div>
          <BiLogOut className="topNav_icon" />
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
