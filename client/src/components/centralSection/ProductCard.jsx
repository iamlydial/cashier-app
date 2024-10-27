import React from "react";
import Coffee from "../../assets/product_images/coffee.png";

const ProductCard = () => {
  return (
    <div
      data-testid="product"
      className=" flex flex-col w-4/12 bg-lightSilver rounded-3xl h-auto p-4 gap-y-4"
    >
      <img data-testid="product-image" src={Coffee} alt="" />
      <div className="flex flex-row w-full justify-between">
        <h2
          data-testid="product-title"
          className="text-eerieBlack font-semibold"
        >
          Coffee
        </h2>
        <p data-testid="product-price" className="text-eerieBlack">
          $11.33
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
