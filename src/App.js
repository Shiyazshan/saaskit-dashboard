import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Store from "./components/context/Store";
import MainRouter from "./components/routers/MainRouter";

function App() {

  return (
    <Store>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Store>
  );
}

export default App;
