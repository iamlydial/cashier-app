import React from "react";
import { beforeEach, describe, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { expect } from "vitest";
import CentralSection from "../centralSection/CentralSection.jsx";

global.fetch = vi.fn()

describe("CentralSection", () => {

  // clean the mock data 
  beforeEach(()=>{
    fetch.mockClear();
  })


  it("render products from server API V1", async() =>{
    const mockProducts = [
      { id: 1, name: "Coffee", price: 11.33, imageUrl: "coffee.png" },
      { id: 2, name: "Green Tea", price: 8.99, imageUrl: "tea.png" },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async ()=> mockProducts
    })
    render(<CentralSection />);
    await waitFor(() => {
      expect(screen.getByText("Coffee")).toBeInTheDocument();
      expect(screen.getByText("Tea")).toBeInTheDocument();
    });
  })

  


  it("it renders central section with all components", () => {
    render(<CentralSection />);
    screen.debug();
    const centralSectionElement = screen.getByTestId("centralSection");
    expect(centralSectionElement).toBeInTheDocument();
  });
});
