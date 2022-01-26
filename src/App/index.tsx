import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ThemeContextProvider from "./ThemeContextProvider";

export default function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
