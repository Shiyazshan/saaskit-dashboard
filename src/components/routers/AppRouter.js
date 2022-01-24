import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../context/Store";
import Chat from "../Chat";
import Contact from "../Contact";
import Dashboard from "../Dashboard";
import Task from "../Task";
import Sidebar from "../includes/Sidebar";

function AppRouter({ active, setActive }) {
  const { state, dispatch } = useContext(Context);

  console.log("in app routrr");
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route
          path="/"
          element={<Dashboard active={active} setActive={setActive} />}
        />
        <Route
          path="contact"
          element={<Contact active={active} setActive={setActive} />}
        />
        <Route path="task" element={<Task />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
