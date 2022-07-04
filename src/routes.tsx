import React from "react";
import { Route, Routes } from "react-router";
import { Login } from "./ui/pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/creactaccount" element={<></>} />
    </Routes>
  );
}

export default AppRoutes;
