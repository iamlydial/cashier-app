import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/reducers/cartReducer.js';
import Coffee from "../../assets/product_images/coffee.png";
import GreenTea from "../../assets/product_images/green-tea.png";
import Strawberry from "../../assets/product_images/strawberry.png";

const productImages = {
  GR1: GreenTea,
  SR1: Strawberry,
  CF1: Coffee,
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state =>
    state.cart.items.find(item => item.id === product.id)?.quantity || 0
  );

  const handleAdd = () => {
    dispatch(addItem(product));
  };

  const handleRemove = () => {
    if (quantity > 0) {
      dispatch(removeItem(product));
    }
  };

  return (
    <div
      data-testid="product"
      className="relative flex flex-col w-full bg-lightSilver rounded-3xl h-auto p-4 gap-y-4 overflow-hidden"
    >
      {/* Product Image */}
      <img 
        data-testid="product-image" 
        src={productImages[product.code] || Coffee} 
        alt={product.name} 
      />

      {/* Product Info */}
      <div className="flex flex-row w-full justify-between">
        <h2
          data-testid="product-title"
          className="text-eerieBlack font-semibold"
        >
          {product.name}
        </h2>
        <p data-testid="product-price" className="text-eerieBlack">
          ${product.price}
        </p>
      </div>

      {/* Hidden Overlay - Slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-persianRed bg-opacity-75 text-white p-4 flex flex-col justify-center items-center space-y-2 opacity-0 hover:opacity-100 transition-opacity duration-300 h-full">
        <div className="flex flex-row w-6/12 h-10 items-center justify-between">
          <button 
            onClick={handleRemove}
            className="bg-white h-full w-10 hover:bg-persianRed-50 text-persianRed font-bold text-3xl flex justify-center items-center rounded-lg">
            - 
          </button>
          <p className="font-3xl">{quantity}</p>
          <button
            onClick={handleAdd} 
            className="bg-white h-full w-10 hover:bg-persianRed-50 text-persianRed font-bold text-3xl flex justify-center items-center rounded-lg">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
