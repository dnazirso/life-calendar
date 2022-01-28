import { render, screen } from "@testing-library/react";

import Store from "./";

describe(`${Store.name}`, () => {
  it("renders correctly", () => {
    render(<Store />);
    expect(
      screen.getByText("edit me: at src/Store/index.js")
    ).toBeInTheDocument();
  });
});
