import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "./reducers/fruitReducer.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers/fruitRoutes.jsx";
import React from "react";

const store = configureStore({
  reducer: {
    fruits: fruitReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
