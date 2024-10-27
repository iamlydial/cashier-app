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
        <div className="hidden md:flex w-2/12">
          <Sidebar />
        </div>

        {/* Central Section */}
        <div className="w-10/12 bg-white border  rounded-r-3xl">
          <CentralSection />
        </div>

        {/* Cashier Section */}
        <div className="w-4/12 bg-gray-200 border rounded-r-3xl">
          <CashierSection />
        </div>
      </div>
    </>
  );
}

export default App;
