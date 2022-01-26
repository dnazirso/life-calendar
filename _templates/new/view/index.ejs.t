---
to: src/<%= h.inflection.camelize(name) %>/index.tsx
---
<% const comp = h.inflection.camelize(name) -%>
export default function <%= comp %>() {
  return <div>edit me: at src/<%= comp %>/index.js</div>;
}
