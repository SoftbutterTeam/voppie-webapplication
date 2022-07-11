import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import "./styles/tailwind.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="h-full ">
      <div className="h-full">
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
