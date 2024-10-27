import React from "react";
import { categoryItems } from "../../constants/categoryConstants";

const CategorySection = () => {
  return (
    <div className="flex flex-grow gap-4">
      {/* Parent container to wrap all items */}
      {categoryItems.map((item, index) => (
        <div
          key={index}
          className="flex rounded-3xl flex-col w-2/12 bg-lightSilver p-4"
        >
          <div className="flex flex-row items-center">
            <img src={item.icon} alt={item.name} />
            <p className="font-semibold">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
