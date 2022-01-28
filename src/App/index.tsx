import { BrowserRouter } from "react-router-dom";
import { SignInContextProvider } from "../SignInContext";
import ThemeContextProvider from "./ThemeContextProvider";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "../Store";

export default function App() {
  return (
    <SignInContextProvider>
      <Provider store={store}>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeContextProvider>
      </Provider>
    </SignInContextProvider>
  );
}
