import { render, screen } from "@testing-library/react";

import Signincontext from "./";

describe(`${Signincontext.name}`, () => {
  it("renders correctly", () => {
    render(<Signincontext />);
    expect(
      screen.getByText("edit me: at src/Signincontext/index.js")
    ).toBeInTheDocument();
  });
});
