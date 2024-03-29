import { BrowserRouter } from "react-router-dom";
import { SignInContextProvider } from "../SignInContext";
import ThemeContextProvider from "./ThemeContextProvider";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "../Store";
import Layout from "../Layout";

export default function App() {
  return (
    <SignInContextProvider>
      <Provider store={store}>
        <ThemeContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ThemeContextProvider>
      </Provider>
    </SignInContextProvider>
  );
}
