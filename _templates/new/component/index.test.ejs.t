---
to: src/<%= h.inflection.camelize(name) %>/index.test.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import { render, screen } from "@testing-library/react";

import <%= comp %> from "./";

describe(`${<%= comp %>.name}`, () => {
  it("renders correctly", () => {
    render(<<%= comp %> />);
    expect(
      screen.getByText("edit me: at src/<%= comp %>/index.js")
    ).toBeInTheDocument();
  });
});
