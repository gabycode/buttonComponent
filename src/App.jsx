import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="sidebar">
        <h1 className="title">
          <span className="red-dev">Dev</span>challenges.io
        </h1>
      </div>
    </div>
  );
}

export default App;
