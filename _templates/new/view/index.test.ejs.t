---
to: src/<%= h.inflection.camelize(name) %>/index.test.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import { render } from "@testing-library/react";

import <%= comp %> from "./";

describe(`${<%= comp %>.name}`, () => {
  it("renders correctly", () => {
    const { asFragment } = render(<<%= comp %> />);
    expect(asFragment()).toMatchSnapshot();
  });
});
