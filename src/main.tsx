import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
