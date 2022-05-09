import React from "react";
import { Provider as StoreProvider } from "react-redux";

import { Container, CssBaseline } from "@mui/material";
import Places from "./Container";

import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <CssBaseline />
      <Places />
    </StoreProvider>
  );
}

export default App;
