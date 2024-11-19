import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/dashboard/page";

describe("Image Display", () => {
  it("renders a image for desktop", () => {
    render(<Page />);

    const text = screen.getByRole("paragraph", { value: "Dashboard Page" });

    expect(text).toBeInTheDocument();
  });
});
