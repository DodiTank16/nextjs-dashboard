import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Image Display", () => {
  it("renders welcome message", () => {
    render(<Page />);

    const logo = screen.getByRole("strong", { value: "Welcome to Acme" });

    expect(logo).toBeInTheDocument();
  });

  it("renders a image for desktop", () => {
    render(<Page />);

    const image1 = screen.getByRole("img", { name: "hero-desktop" });

    expect(image1).toBeInTheDocument();
  });

  it("renders a image for mobile", () => {
    render(<Page />);

    const image2 = screen.getByRole("img", { name: "hero-mobile" });

    expect(image2).toBeInTheDocument();
  });
});
