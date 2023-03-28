import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import Main from './landing page/Main'

const App = () => {
  return <div>
      <Main />
  </div>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
