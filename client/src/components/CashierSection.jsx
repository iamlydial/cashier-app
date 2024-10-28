import React from "react";

const CashierSection = () => {
  return (
    <div className="flex justify-center items-center bg-yankeesBlue h-full rounded-r-3xl px-4">
      <div className="flex flex-col items-center w-full h-3/4 bg-white rounded-3xl ">
        <div>ddd</div>
        <div>ddd</div>
        <div className="flex flex-col  items-center w-full">
          <p className="">Payment Methods</p>
          <div>
            
          </div>
          <button className="rounded-full w-10/12 bg-persianRed p-4 text-white uppercase">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashierSection;
