import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

function MenuRoutes() {
  return (
    <>
      <Routes>
        <Route path="profile" element={<div>Profile page</div>} />
        <Route path="features" element={<div>Feautures page</div>} />
        <Route path="settings" element={<div>Settings page</div>} />
        <Route path="logout" element={<div> Logout Page</div>} />
      </Routes>
      <Outlet></Outlet>
    </>
  );
}

export default MenuRoutes;
