import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./accordion";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
