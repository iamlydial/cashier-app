import React, { useEffect, useState } from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from './redux/store';
import { TopBar } from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import CentralSection from "./components/centralSection/CentralSection.jsx";
import CashierSection from "./components/cashierSection/CashierSection.jsx";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }     
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data, "categories");
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }     
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <>
    <Provider store={store}>
      <TopBar />
      <div className="flex flex-row h-full">
        {/* Sidebar */}
        <div className="hidden md:flex w-2/12">
          <Sidebar />
        </div>

        {/* Central Section */}
        <div className="w-10/12 bg-white border  rounded-r-3xl">
          <CentralSection products={products} categories={categories} />
        </div>

        {/* Cashier Section */}
        <div className="w-4/12 bg-gray-200 border rounded-r-3xl">
          <CashierSection />
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
