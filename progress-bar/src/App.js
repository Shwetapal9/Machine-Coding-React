import logo from "./logo.svg";
import "./index.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
  }, []);

  return (
    <>
      <div className="app">
        <span>Progress Bar</span>
        <ProgressBar value={value} />
      </div>
    </>
  );
}

export default App;
