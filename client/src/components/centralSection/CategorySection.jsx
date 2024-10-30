import React from "react";
import { categoryItems } from "../../constants/categoryConstants";
import Teas from '../../assets/Tea.svg'
import Coffes from '../../assets/Cafe.svg'
import Fruits from '../../assets/Fruits.svg'
const categoryImages = {
  1: Teas,
  2: Coffes,
  3: Fruits,
};

const CategorySection = ({category}) => {
  return (
    <div className="flex flex-grow gap-4"> 
        <div
          key={category.id}
          className="flex rounded-3xl flex-col w-6/12 bg-lightSilver p-4"
        >
          <div className="flex flex-row items-center">
            <img src={categoryImages[category.id]} alt={category.name} /> 
            <p className="font-semibold">{category.name}</p>
          </div>
        </div>
     
    </div>
  );
};

export default CategorySection;
