import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./components/GlobalStyle";
import { Provider } from "react-redux";
import store from "~/redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyle>
  </React.StrictMode>
);
