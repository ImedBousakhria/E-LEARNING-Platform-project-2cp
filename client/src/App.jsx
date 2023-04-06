import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./landing page/Main";
import Mainapp from "./content page/Mainapp";
import Login from "./signin page/Login";
import Teacherassignment from "./content page/Assignment/Assignment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/Home"} element={<Mainapp />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route
          path="/Teacher/assignment"
          element={<Teacherassignment />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
