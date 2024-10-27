import React from "react";
import { menuItems } from "../constants/sidebarConstants";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div>
      <nav
        data-testid="sidebar"
        className={` ${
          sidebarToggle ? "hidden" : "block"
        } w-40 bg-yankeesBlue  fixed h-full pt-8 rounded-r-3xl `}
      >
        <div>
          <ul className="flex flex-col items-center gap-y-16">
            {menuItems.map((item, key) => (
              <li data-testid={item.id} key={item.id} className="">
                <div className="flex flex-col items-center justify-center h-32 w-28 rounded-3xl hover:bg-littleGirlPink">
                  <img src={item.icon} className="inline-block w-12 h-12" />
                  <h1 className="text-2xl text-white font-bold">
                    {item.label}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
