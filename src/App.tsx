import React from "react";

import "./App.css";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button text="click me" onClick={() => console.log("click")} />
    </div>
  );
}

export default App;
