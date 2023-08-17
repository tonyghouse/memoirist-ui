import React, { useContext } from "react";
import Sidebar from "./Sidebar";

import { ISidebarContextType, SidebarContext } from "@/context/SidebarContext";

function LandingPage() {
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  return (
    <>
      <div className="w-full h-full min-h-[100vh] flex flex-row">
        {sidebarContext.sidebarInd && <Sidebar setModuleId={"landingpage"} />}

        <div
          className="border-border border-[0.12rem] rounded-sm my-2 h-full min-h-[100vh] w-full"
        >
          Landing Page
        </div>
      </div>
    </>
  );
}

export default LandingPage;
