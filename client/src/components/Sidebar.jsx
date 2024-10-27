import React from "react";
import { menuItems } from "../constants/sidebarConstants";

const Sidebar = () => {
  return (
    <nav
      data-testid="sidebar"
      className="w-64 bg-yankeesBlue  fixed h-full pt-8"
    >
      <ul className="flex flex-col items-center gap-y-16">
        {menuItems.map((item) => (
          <li data-testid={item.id} className="">
            <div className="flex flex-col items-center justify-center h-32 w-28 rounded-3xl hover:bg-littleGirlPink">
              <img src={item.icon} className="inline-block w-12 h-12" />
              <h1 className="text-2xl text-white font-bold">{item.label}</h1>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
