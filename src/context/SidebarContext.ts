import { createContext } from "react";

export interface ISidebarContextType{
    sidebarInd: boolean;
    toggleSidebarInd: () => void
}

export const defaultSidebarContextType : ISidebarContextType = {
    sidebarInd: false,
    toggleSidebarInd: ()=>{}
}

export const SidebarContext = createContext<ISidebarContextType>(defaultSidebarContextType);
