import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Templates from "./Templates";
import SearchPage from "./SearchPage";
import MomentoMori from "./MomentoMori";
import AddNewSection from "./AddNewSection";
import CustomEditor from "./CustomEditor";

function SectionRoutes() {
  
  return (
    <>
    
      <Routes >
     
        <Route index element={<CustomEditor />} />
        <Route path="add-new" element={<AddNewSection />} />
       
        
      </Routes>
      <Outlet></Outlet>
    </>
  );
}

export default SectionRoutes;
