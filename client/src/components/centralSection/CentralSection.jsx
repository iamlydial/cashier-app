import React from "react";
import CategorySection from "./CategorySection";
import ProductCard from "./ProductCard";

const CentralSection = () => {
  return (
    <div data-testid="centralSection" className="p-4">
      <CategorySection />

      <ProductCard />
    </div>
  );
};

export default CentralSection;
