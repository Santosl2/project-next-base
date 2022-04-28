/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header Test", () => {
  it("should render Header", () => {
    render(<Header />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
