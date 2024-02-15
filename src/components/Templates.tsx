import React, { useContext } from "react";
import Sidebar from "./Sidebar";

import { ISidebarContextType, SidebarContext } from "@/context/SidebarContext";
import { Skeleton } from "./ui/skeleton";

function Templates() {
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  return (
    <>
      <div className="w-full h-full min-h-[100vh] flex flex-row">
        {sidebarContext.sidebarInd && <Sidebar setModuleId={"landingpage"} />}

        <div className=" rounded-sm my-2 h-full min-h-[100vh] w-full">
          <div className="text-xl p-4">Templates</div>
          <div className="grid grid-cols-3 gap-8 p-4">
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          <Skeleton className="border border-foreground w-full h-[10rem] rounded-lg" />
          
         
        
          </div>
        </div>
      </div>
    </>
  );
}

export default Templates;
