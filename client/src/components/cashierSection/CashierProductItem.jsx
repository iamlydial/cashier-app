import React from "react";
;

const CashieProductItem = ({product}) => {
  return (
    <>
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-col items-start">
          <p className="font-semibold text-lg">{product.name}</p>
          <p className="text-sm">Qty. {product.quantity}</p>
        </div>
        <div>${product.price}</div>
      </div>
    </>
  );
};

export default CashieProductItem;
