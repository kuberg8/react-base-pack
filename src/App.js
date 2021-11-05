import React from "react";
import Router from "./routes/routes";
import store from "./redux/index.js";
import AppProvider from "src/utils/HOC/AppContext";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppProvider>
          <Router />
        </AppProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
