import React, { useEffect, useState } from "react";
import CategorySection from "./CategorySection";
import ProductCard from "./ProductCard";

const CentralSection = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }     
    }

    fetchProducts()
  },[])

  return (
    <div data-testid="centralSection" className=" flex flex-col gap-10 p-8">
      <div className="">
        <CategorySection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
  
      </div>
    </div>
  );
};

export default CentralSection;
