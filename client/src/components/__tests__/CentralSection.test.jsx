import React from "react";
import { beforeEach, describe, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import store from '../../redux/store.js';
import { expect } from "vitest";
import CentralSection from "../centralSection/CentralSection.jsx";
import { Provider } from "react-redux";

global.fetch = vi.fn()

describe("CentralSection", () => {
  it("renders central section with all components", () => {
     const mockProducts = [
      { id: 1, name: "Coffee", price: 11.33 },
      { id: 2, name: "Green Tea", price: 8.99 },
    ];

    const mockCategories = [
      { id: 1, name: "Coffees" },
      { id: 2, name: "Fruits" },
    ];

     render(
      <Provider store={store}>
        <CentralSection products={mockProducts} categories={mockCategories} />
      </Provider>
    );

    // Check if the central section is rendered
    const centralSectionElement = screen.getByTestId("centralSection");
    expect(centralSectionElement).toBeInTheDocument();
  });
});
