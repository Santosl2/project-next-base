import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header Test", () => {
  it("should render Header", () => {
    render(<Header />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
