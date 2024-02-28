import "tailwindcss/tailwind.css";
import "../styles/design_tokens.css";
import "../styles/blog.css";
import "../styles/button.css";
import "../styles/steps.css";
import "../styles/logo-maker-styles/header.css"
import "../styles/logo-maker-styles/mainPage.css"
import "../styles/logo-maker-styles/customScrollBar.css"
import "../styles/logo-maker-styles/optionlist.css"
import "../styles/logo-maker-styles/range.css"
import "../globals.css";
import { authState, onInit } from "../store/authstore";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistore, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setAuth();
  }, []);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <ToastContainer position="top-right" />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>,
  );
}

export const setAuth = () => {
  if (localStorage.getItem("user")) {
    authState.set({
      ...authState.get(),
      authProfile: JSON.parse(localStorage.getItem("user")),
      isAuthenticated: true,
      authToken: localStorage.getItem("token"),
    });
    return true;
  }
  return false;
};
