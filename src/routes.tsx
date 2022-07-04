import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Login } from "./ui/pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
