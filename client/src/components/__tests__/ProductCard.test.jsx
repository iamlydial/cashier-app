import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import ProductCard from "../centralSection/ProductCard";

describe("product", () => {
  it("it renders top bar with all components", () => {
    const mockProduct = { name: "Coffee", price: 11.33 };
    render(<ProductCard product={mockProduct} />);
    screen.debug();
    const productElement = screen.getByTestId("product");
    expect(productElement).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toBeInTheDocument();
    expect(screen.getByTestId("product-title")).toBeInTheDocument();
    expect(screen.getByTestId("product-price")).toBeInTheDocument();
  });
});
