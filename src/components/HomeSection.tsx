import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import DateChooser from "./DateChooser";
import CustomEditor from "./CustomEditor";

import { SectionInfo } from "../model/SectionInfo";

import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { ISidebarContextType, SidebarContext } from "@/context/SidebarContext";
import AddNewSection from "./AddNewSection";

function HomeSection() {
  const [sectionInfo, setSectionInfo] = useState<SectionInfo>({ sectionTitle:"add-new"});
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  const settingSectionInfo = (newSectionInfo:SectionInfo) =>{
    setSectionInfo(newSectionInfo);
  }
  
  useEffect(() => {
  }, [sectionInfo])
  

  return (
    <>
      <div
        className="h-full min-h-[100vh] w-full flex flex-row">


        {/* {sidebarContext.sidebarInd && <Sidebar settingSectionInfo={settingSectionInfo} />} */}

        <div
          className={`border-border border-[0.12rem] rounded-sm my-2 h-full min-h-[100vh] w-full `}>
           { sectionInfo && sectionInfo?.sectionTitle ==="add-new" ? 
               <AddNewSection/> :  
               <CustomEditor key={sectionInfo.sectionTitle} /> }            
        
        </div>

      </div>
    </>
  );
}

export default HomeSection;
