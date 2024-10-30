import React, { useEffect, useState } from "react";
import { paymentItems } from "../../constants/paymentConstants.js";
import Promo from "../../assets/Discount.svg";
import CashieProductItem from "./CashierProductItem.jsx";
import { useSelector } from "react-redux";

const CashierSection = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchTotalPrice = async () => {
      if (cartItems.length === 0) {
        setTotalPrice(0);
        return;
      }

      const filteredCartItems = cartItems.map(item => ({
        product_code: item.code, 
        quantity: item.quantity, 
      }));

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checkout: { cart_items: filteredCartItems } }),
      });

      console.log(response)

      if(response.ok){
        const data = await response.json();
        console.log(data)
        setTotalPrice(data.total_price)
      } else {
        console.log("Failed to fetch total price")
      }
    };
    fetchTotalPrice()
  }, [cartItems]);

  return (
    <div className="flex justify-center items-center bg-yankeesBlue h-full rounded-r-3xl px-4">
      <div className="flex flex-col w-full h-3/4 bg-white rounded-3xl gap-4 p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CashieProductItem key={item.id} product={item} />
          ))
        )}

        <div className=" flex flex-col  mt-auto ">
          <div className="h-auto pb-4">
            <p className="flex font-semibold pb-2 text-xs text-eerieBlack">
              Promo Applied:
            </p>
            <div className="flex flex-col items-stretch">
              <div className="flex pb-2  border-b-2 border-eerieBlack">
                <img src={Promo} alt="" className="h-8" />
                <div className="flex items-center bg-arylideYellow h-4 p-2 rounded-full">
                  <p className="text-xs font-semibold text-eerieBlack">
                    BOGO50
                  </p>
                </div>

                <p className="ml-auto">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-eerieBlack">Total</p>
                <p>${totalPrice}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-y-4 flex-col w-full">
            <p className="flex text-eerieBlack font-semibold">
              Payment Methods
            </p>
            <div className="flex  w-full justify-between gap-4">
              {paymentItems.map((item, key) => (
                <div
                  className="flex justify-center h-12 w-3/12 bg-lightSilver rounded-2xl"
                  key={item.id}
                >
                  <img src={item.icon} alt={item.label} />
                </div>
              ))}
            </div>
            <div className="w-full">
              <button className="rounded-full w-full bg-persianRed p-4 text-white uppercase">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierSection;
