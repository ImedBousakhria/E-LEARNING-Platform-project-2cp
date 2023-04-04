import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./landing page/Main";
import Teacherhome from "./teacher/Teacherhome";
import Login from './signin page/Login'
import Teacherassignment from "./teacher Assignment/Teacherassignment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/Teacher"} element={<Teacherhome />}></Route>
        <Route path={"/login"} element={<Login />} ></Route>
        <Route path="/Teacher/assignment" element={<Teacherassignment/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
