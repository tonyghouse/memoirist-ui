import React, { useState,useContext,useEffect } from "react";
import Sidebar from "./Sidebar";
import DateChooser from "./DateChooser";
import CustomEditor from "./CustomEditor";

import { IThemeContextType, ThemeContext } from "../context/ThemeContext";

interface IHomeSectionProps {
  sidebarInd: boolean;
}
function HomeSection({ sidebarInd }: IHomeSectionProps) {
  const[moduleId,setModuleId] = useState<string|null>();
  const themeContext = useContext<IThemeContextType>(ThemeContext);
 

  


  



  return (
    <>
      <div
        className="
                w-full h-full min-h-[100vh] flex flex-row"
      >
        {sidebarInd && <Sidebar setModuleId={setModuleId} />}

        <div
          className={`
          border-border border rounded-sm  
          my-2 h-full min-h-[100vh] w-full`}
        >
       
       <CustomEditor/>

        </div>
      </div>
    </>
  );
}

export default HomeSection;
