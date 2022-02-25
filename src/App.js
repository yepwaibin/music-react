import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import routes from "./router";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AppPlayerBar from "./pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<div>loaing</div>}>{renderRoutes(routes)}</Suspense>
        <Footer />
        <AppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
