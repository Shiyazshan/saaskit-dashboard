import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "../Chat";
import Contact from "../Contact";
import Dashboard from "../Dashboard";
import Sidebar from "../includes/Sidebar";

function AppRouter({ active, setActive }) {

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
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
