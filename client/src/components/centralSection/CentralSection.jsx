import React from "react";
import CategorySection from "./CategorySection";
import ProductCard from "./ProductCard";

const CentralSection = () => {
  return (
    <div data-testid="centralSection" className=" flex flex-col gap-10 ">
      <div className="p-4">
        <CategorySection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CentralSection;
