import React from "react";
import CentralPerk from "./../assets/centralPerk.svg";
import Search from "./../assets/Search.svg";
import Checkout from "./../assets/Checkout.svg";
import User from "./../assets/User.svg";

export const TopBar = () => {
  return (
    <header
      data-testid="topbar"
      className="flex justify-center items-center bg-cornflowerBlue h-20 p-4"
    >
      <div className="flex justify-between items-center flex-row w-full md:w-11/12">
        <img
          data-testid="perk-bar-icon"
          src={CentralPerk}
          height="80px"
          width="80px"
        />
        <div className="flex bg-lightSilver opacity-50 h-12 items-center rounded-lg p-2 md:w-full max-w-sm">
          <img src={Search} alt="Search Icon" className="h-10 w-10 mr-2" />
          <input
            type="text"
            data-testId="search-bar"
            placeholder="Search..."
            className="outline-none flex-grow bg-lightSilver text-gray-700 placeholder-white"
          />
        </div>

        <div className="flex items-center justify-between rounded-full bg-lightSilver  h-12 w-12 p-2">
          <img data-testid="checkout-icon" src={Checkout} className="h-8 w-8" />
        </div>

        <div className="bg-lightSilver  hidden md:flex items-center justify-between rounded-full h-12 w-28 p-1">
          <img
            src={User}
            data-testid="user-icon"
            className="h-12 w-12 rounded-full"
            alt="User Icon"
          />
          <p className="font-sans font-semibold text-white text-center flex-grow">
            L. L.
          </p>
        </div>
      </div>
    </header>
  );
};
