import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Blank } from "./ui/pages";
import { LoginPage, RegisterPage } from "./ui/pages/authentication";
import DraftPage from "./ui/pages/blank/draft.page";
function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<DraftPage />} />
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
