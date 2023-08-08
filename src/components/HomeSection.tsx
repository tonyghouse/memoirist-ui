import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DateChooser from "./DateChooser";

interface IHomeSectionProps {
  sidebarInd: boolean;
}
function HomeSection({ sidebarInd }: IHomeSectionProps) {

  const[moduleId,setModuleId] = useState<string|null>();

  return (
    <>
      <div
        className="
                w-full h-full min-h-[100vh] flex flex-row"
      >
        {sidebarInd && <Sidebar setModuleId={setModuleId} />}

        <div
          className="my-2 border-[0.07rem] md:border-[0.09rem]  border-[black] rounded-lg 
    h-full min-h-[100vh] w-full"
        >
          {/* <DateChooser/> */}
          home content of 
          {moduleId}
        </div>
      </div>
    </>
  );
}

export default HomeSection;
