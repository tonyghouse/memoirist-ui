import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Templates from "./Templates";
import SearchPage from "./SearchPage";
import MomentoMori from "./MomentoMori";
import Navbar from "./Navbar";

function NavRoutes() {
  return (
    <>
    
      <Routes >
        <Route path="templates" element={<Templates />} />
        <Route path="momento-mori" element={<MomentoMori />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
      <Outlet/>
    </>
  );
}

export default NavRoutes;
