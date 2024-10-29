import React, { useEffect, useState } from "react";
import CategorySection from "./CategorySection";
import ProductCard from "./ProductCard";

const CentralSection = ({products, categories }) => {

  return (
    <div data-testid="centralSection" className="flex flex-col gap-10 p-8">
      <div className="flex gap-4">
        {categories.map((category, id) => (
             <CategorySection key={category.id} category={category} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
          <ProductCard key={product.id} product={product}  /> 
        ))}
      </div>
    </div>
  );
};

export default CentralSection;
