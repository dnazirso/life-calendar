---
to: src/<%= h.inflection.camelize(name) %>/index.stories.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
const Template = () => <<%= comp %> />;

export const Standalone = Template.bind({});

export default {
  title: "<%= comp %>",
  component: <%= comp %>,
};
