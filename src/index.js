import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Loop from "./Loop";

function App() {
  return (
    <div>
      <Loop timer={3} color="red" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
