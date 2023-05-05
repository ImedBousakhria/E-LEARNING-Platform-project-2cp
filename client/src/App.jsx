import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./landing page/Main";
import Mainapp from "./content page/Mainapp";
import Login from "./signin page/Login";
import Teacherassignment from "./content page/Assignment/Assignment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PrivateRoutes from "./PrivateRoutes";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route element={<PrivateRoutes/>}>
            <Route path={"/Home"} element={<Mainapp />}></Route>
          </Route>
        </Routes>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
