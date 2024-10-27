import React from "react";
import { useState } from "react";
import "./App.css";
import { TopBar } from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import CategorySection from "./components/centralSection/CategorySection";
import CentralSection from "./components/centralSection/centralSection";
import CashierSection from "./components/CashierSection";

function App() {
  return (
    <>
      <TopBar />
      <div className="flex flex-row h-full">
        {/* Sidebar */}
        <div className="w-1/12 bg-yankeesBlue">
          <Sidebar />
        </div>

        {/* Central Section */}
        <div className="w-4/6 bg-white border">
          <CentralSection />
        </div>

        {/* Cashier Section */}
        <div className="w-1/4 bg-gray-200 border">
          <CashierSection />
        </div>
      </div>
    </>
  );
}

export default App;
