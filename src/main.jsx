import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="max-w-7xl mx-auto bg-[#EDF2F7]">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
