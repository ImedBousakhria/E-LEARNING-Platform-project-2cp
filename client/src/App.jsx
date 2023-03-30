import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./landing page/Main";
import Teacherhome from "./teacher/Teacherhome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/Teacher"} element={<Teacherhome />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
