import React from "react";
import { Route, Routes } from "react-router-dom";
import Templates from "./Templates";
import SearchPage from "./SearchPage";
import MomentoMori from "./MomentoMori";
import MasterLayout from "./MasterLayout";

function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="templates" element={<Templates />} />
        <Route path="momento-mori" element={<MomentoMori />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default NavRoutes;
