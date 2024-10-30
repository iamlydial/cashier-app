import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import ProductCard from "../centralSection/ProductCard";
import store from '../../redux/store.js';
import { Provider } from "react-redux";


describe("product", () => {
  it("it renders product with all components", () => {
    const mockProduct = { id: "CF1", name: "Coffee", price: 11.33, code: "CF1" };
    
    
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );

    screen.debug();
    const productElement = screen.getByTestId("product");
    expect(productElement).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toBeInTheDocument();
    expect(screen.getByTestId("product-title")).toBeInTheDocument();
    expect(screen.getByTestId("product-price")).toBeInTheDocument();
  });
});
