import React from "react";
import DashboardLayout from "../assets/DashboardLayout.svg";
const Sidebar = () => {
  return (
    <nav
      data-testid="sidebar"
      className="w-64 bg-yankeesBlue  fixed h-full pt-8"
    >
      <ul className="flex flex-col items-center border gap-y-16">
        <li data-testid="home" className="">
          <div className="flex flex-col items-center justify-center h-32 w-28 rounded-3xl hover:bg-littleGirlPink">
            <img src={DashboardLayout} className="inline-block w-12 h-12" />
            <h1 className="text-2xl text-white font-bold">Home</h1>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
