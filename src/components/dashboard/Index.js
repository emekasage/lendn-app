import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

const Index = () => {
  return (
    <div className="">
      <Sidebar />
      <div>
        <Topbar />
        <div className="col p-0">
          {/* Page Content here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Index;
