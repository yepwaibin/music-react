import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import routes from "./router";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </HashRouter>
    </Provider>
  );
});
