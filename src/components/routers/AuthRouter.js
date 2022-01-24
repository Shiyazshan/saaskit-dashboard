import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";

function AuthRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AuthRouter;
