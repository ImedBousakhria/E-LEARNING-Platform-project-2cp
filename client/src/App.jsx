import React, { createContext, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./landing page/Main";
import Mainapp from "./content page/Mainapp";
import Login from "./signin page/Login";
import Teacherassignment from "./content page/Assignment/Assignment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PrivateRoutes from "./PrivateRoutes";

export const authContext = createContext()


const App = () => {
  const [token, setToken] = useState()
  const [userID, setUser] = useState()
  const [userObj, setUserObj] = useState()

  /* useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token stored");

        const decoded = jwt_decode(token);
        const { userID } = decoded;

        const response = await axios.get(`http://localhost:3000/user/get/${userID}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const user = response.data;
        console.log(user)
        setUserObj(user);

      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [token]); */


  return (
    <BrowserRouter>
     <authContext.Provider value={{ setToken, userID, setUser, userObj, setUserObj }}>
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"/login"} element={<Login setToken={setToken} setUser={setUser}/>}></Route>
          <Route element={<PrivateRoutes token={token}/>}>
            <Route path={"/Home"} element={<Mainapp />}></Route>
            
          </Route>
        </Routes>        
      </authContext.Provider>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
