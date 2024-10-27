import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import  Sidebar  from "../Sidebar";
import { expect } from "vitest";

describe("Sidebar", () => {
  it("it renders sidebar with all components", () => {
    render(<Sidebar />);
    screen.debug();
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
    expect(screen.getByTestId("home")).toBeInTheDocument();
    expect(screen.getByTestId("menu")).toBeInTheDocument();
    expect(screen.getByTestId("history")).toBeInTheDocument();
    expect(screen.getByTestId("promos")).toBeInTheDocument();
  });
});
