import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Store, { Context } from "./components/context/Store";
import MainRouter from "./components/routers/MainRouter";

function App() {
  const [active, setActive] = useState(true);
  const [isLoggedin, setLoggedin] = useState(false);
  const { state, dispatch } = useContext(Context);

  return (
    <Store>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Store>
  );
}

export default App;
