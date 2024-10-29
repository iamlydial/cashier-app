import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/reducers/cartReducer.js";

const CashieProductItem = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-col items-start">
          <p className="font-semibold text-lg">Coffee</p>
          <p className="text-sm">Qty. 1</p>
        </div>
        <div>$11.33</div>
      </div>
    </>
  );
};

export default CashieProductItem;
