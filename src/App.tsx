import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { AppContainer } from "./ui/layouts/app-container";

function App() {
  return (
    <AppContainer>
      <BrowserRouter basename="">
        <AppRoutes />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
