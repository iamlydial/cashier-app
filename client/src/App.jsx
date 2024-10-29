import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from './redux/store';
import { TopBar } from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import CentralSection from "./components/centralSection/CentralSection.jsx";
import CashierSection from "./components/cashierSection/CashierSection.jsx";

function App() {
  return (
    <>
    <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
