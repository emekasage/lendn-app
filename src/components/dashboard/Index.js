import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

const Index = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Topbar />

        {/* Page Content here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
