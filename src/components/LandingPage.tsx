import React, { useContext } from "react";
import Sidebar from "./Sidebar";

import { ISidebarContextType, SidebarContext } from "@/context/SidebarContext";
import { SignInButton } from "@clerk/clerk-react";
import Navbar from "./Navbar";

function LandingPage() {
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  return (
    <>
      <div className="w-full h-full min-h-[100vh] flex flex-col">
        <Navbar/>
        
       
      </div>
    </>
  );
}

export default LandingPage;
