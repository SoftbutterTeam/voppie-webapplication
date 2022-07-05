import React from "react";
import { Navigate, Route, Routes } from "react-router";
import MinimalLayout from "./ui/layouts/page-layout/minimal.layout";
import { Blank } from "./ui/pages";
function AppRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <MinimalLayout>
            <Blank />
          </MinimalLayout>
        }
      />
      <Route path="home" element={<></>} />
      <Route path="myprofile" element={<></>} />
      <Route path="login" element={<></>} />
      <Route path="joinus" element={<></>} />
      <Route path="notfound" element={<></>} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}

export default AppRoutes;
