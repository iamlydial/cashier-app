import React from "react";
import { useState } from "react";
import "./App.css";
import { TopBar } from "./components/TopBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <Sidebar />
    </>
  );
}

export default App;
