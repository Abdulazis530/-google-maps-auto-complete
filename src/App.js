import React from "react";
import { Provider as StoreProvider } from "react-redux";

import { CssBaseline } from "@mui/material";
import Places from "./container";

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
