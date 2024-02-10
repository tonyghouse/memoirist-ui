import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import UserProfilePage from "./UserProfilePage";
import Features from "../Features";
import Settings from "../Settings";

function UserMenuRoutes() {

  
  return (
    <>
      <Routes>
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="features" element={<Features />} />
          <Route path="settings" element={<Settings />} />
        
      </Routes>
      <Outlet></Outlet>
    </>
  );
}

export default UserMenuRoutes;
