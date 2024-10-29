import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/reducers/cartReducer.js';
import Coffee from "../../assets/product_images/coffee.png";

const ProductCard = ({product}) => {
const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();

const handleAdd = () =>{
  const productWithQuantity = {
    ...product,
    quantity: quantity,
  };
  dispatch(addItem(productWithQuantity))
}

const handleRemove= () =>{
  if(quantity >0){
    setQuantity(quantity -1)
  }
  if (quantity === 1){
    dispatch(removeItem(product))
  }
}

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
         onClick={() => {
          
          handleRemove();}}
        className="bg-white h-full w-10 hover:bg-persianRed-50 text-persianRed font-bold text-3xl flex justify-center items-center rounded-lg">
          - 
          </button>
          <p className="font-3xl">{quantity}</p>
          <button
           onClick={() => {
            setQuantity(quantity + 1); 
            handleAdd();}} 
          className="bg-white h-full w-10 hover:bg-persianRed-50 text-persianRed font-bold text-3xl flex justify-center items-center rounded-lg">
          +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
