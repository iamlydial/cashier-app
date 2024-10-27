import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TopBar } from "../TopBar"; 
import { expect } from "vitest";

describe("TopBar", () => {
  it("it renders top bar with all components", () => {
    render(<TopBar />);
    screen.debug(); 
    const topBarElement = screen.getByTestId("topbar");
    expect(topBarElement).toBeInTheDocument();
    expect(screen.getByTestId("perk-bar-icon")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("checkout-icon")).toBeInTheDocument();
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });
});
