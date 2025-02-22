import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card flex flex-col items-center gap-4 mt-6">
      <button
        className="px-6 py-2 text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  );
}

export default App;
