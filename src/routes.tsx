import React from "react";
import { Route, Routes } from "react-router";
import { Login, Home, Profile } from "./ui/pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/creactaccount" element={<></>} />

      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
