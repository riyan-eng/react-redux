import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "./reducers/fruitReducer.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers/fruitRoutes.jsx";

const store = configureStore({
  reducer: {
    fruits: fruitReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
