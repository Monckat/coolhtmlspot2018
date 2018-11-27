import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header>Message Passed from React</Header>
      <Header>Here's Another Message</Header>
      <h1>Hello CodeSandbox</h1>
      <h2>Turquoise is a pretty dope color!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
