import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Blank } from "./ui/pages";
import { LoginPage, RegisterPage } from "./ui/pages/authentication";
function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Blank />} />
      <Route path="home" element={<></>} />
      <Route path="myprofile" element={<></>} />
      <Route path="login" element={<LoginPage />} />
      <Route path="join" element={<RegisterPage />} />
      <Route path="notfound" element={<></>} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}

export default AppRoutes;
