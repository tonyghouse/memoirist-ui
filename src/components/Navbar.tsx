import React, { useContext } from "react";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsLayoutSidebar } from "react-icons/bs";
import { RxSun, RxMoon } from "react-icons/rx";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import UserMenu from "./UserMenu";

interface INavbarProps {
  sidebarInd: boolean;
  setSidebarInd: (value: boolean) => void;
}

function Navbar({ sidebarInd, setSidebarInd }: INavbarProps) {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const toggleSidebar = () => {
    setSidebarInd(!sidebarInd);
  };

  return (
    <>
      <div
        className={` 
        border-border border rounded-sm 
        flex flex-row justify-between items-center px-[0.4rem]  py-[0.5rem]`}>
        <div className="flex flex-row justify-start items-center gap-2">
           <BsLayoutSidebar  onClick={toggleSidebar} className="text-sm font-medium leading-none"/>
           <p className="text-sm font-medium leading-none">Memoirist</p>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <UserMenu/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
