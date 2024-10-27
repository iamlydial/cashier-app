import React from "react";
import Coffee from "../../assets/product_images/coffee.png";

const ProductCard = () => {
  return (
    <div
      data-testid="product"
      className="relative flex flex-col w-full bg-lightSilver rounded-3xl h-auto p-4 gap-y-4 overflow-hidden"
    >
      {/* Product Image */}
      <img data-testid="product-image" src={Coffee} alt="Coffee" />

      {/* Product Info */}
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

      {/* Hidden Overlay - Slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-persianRed bg-opacity-75 text-white p-4 flex flex-col justify-center items-center space-y-2 opacity-0 hover:opacity-100 transition-opacity duration-300 h-full">
        <div className="flex flex-row w-6/12 h-10  align-middle justify-between border">
          <button className="bg-white h-full w-4 hover:bg-persianRed-50 text-persianRed font-bold py-2 px-4 rounded-lg">
            +
          </button>
          <p className="font-3xl">1</p>
          <button className="bg-white h-full w-4 hover:bg-persianRed-50 text-white font-bold py-2 px-4 rounded-lg">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
