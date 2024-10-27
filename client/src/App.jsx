import React from "react";
import { useState } from "react";
import "./App.css";
import { TopBar } from "./components/TopBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
    </>
  );
}

export default App;
