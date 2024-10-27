import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { expect } from "vitest";
import CentralSection from "../centralSection/centralSection";

describe("CenralSection", () => {
  it("it renders central section with all components", () => {
    render(<CentralSection />);
    screen.debug();
    const centralSectionElement = screen.getByTestId("centralSection");
    expect(centralSectionElement).toBeInTheDocument();
  });
});
