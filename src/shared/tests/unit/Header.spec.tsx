import { Header } from "@/components";
import { render, screen } from "@testing-library/react";

describe("Header Test", () => {
  it("should render Header", () => {
    render(<Header />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
