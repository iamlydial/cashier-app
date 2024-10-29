import React from "react";
// import { categoryItems } from "../../constants/categoryConstants";

const CategorySection = ({category}) => {
  return (
    <div className="flex flex-grow gap-4"> 
        <div
          key={category.id}
          className="flex rounded-3xl flex-col w-6/12 bg-lightSilver p-4"
        >
          <div className="flex flex-row items-center">
            {/* <img src={category.icon} alt={category.name} /> */}
            <p className="font-semibold">{category.name}</p>
          </div>
        </div>
     
    </div>
  );
};

export default CategorySection;
