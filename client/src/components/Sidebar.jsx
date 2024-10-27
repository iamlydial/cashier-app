import React from "react";

const Sidebar = () => {
  return (
    <nav data-testid="sidebar">
      <div data-testid="home"></div>
      <div data-testid="menu"></div>
      <div data-testid="history"></div>
      <div data-testid="promos"></div>
    </nav>
  );
};

export default Sidebar;
