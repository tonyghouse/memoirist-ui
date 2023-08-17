import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import DateChooser from "./DateChooser";
import CustomEditor from "./CustomEditor";

import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { ISidebarContextType, SidebarContext } from "@/context/SidebarContext";

function HomeSection() {
  const [moduleId, setModuleId] = useState<string | null>();
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  return (
    <>
      <div
        className="w-full h-full min-h-[100vh] flex flex-row">
        {sidebarContext.sidebarInd && <Sidebar setModuleId={setModuleId} />}

        <div
          className={`border-border border-[0.12rem] rounded-sm my-2 h-full min-h-[100vh] w-full`}>
          <CustomEditor />
        </div>
      </div>
    </>
  );
}

export default HomeSection;
