import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import "./styles/tailwind.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <div className="h-full bg-gray-50">
      <div className="h-full">
        <Toaster/> 
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
