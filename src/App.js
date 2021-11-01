import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { HashRouter } from "react-router-dom";

export default memo(function App() {
  return (
    <HashRouter>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </HashRouter>
  );
});
