import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

const App = () => {
  return <div className="text-xl text-yellow-600">App</div>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
