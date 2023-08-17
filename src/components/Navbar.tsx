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
import { Link, Outlet } from "react-router-dom";
import { SidebarContext,ISidebarContextType } from "@/context/SidebarContext";


function Navbar() {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  const toggleSidebar = () => {
    sidebarContext.toggleSidebarInd();
  };

  return (
    <>
      <div
        className={` 
        border-border border-[0.12rem] rounded-sm 
        flex flex-row justify-between items-center px-[0.4rem]  py-[0.5rem]`}>
        <div className="flex flex-row justify-start items-center gap-2">
           <BsLayoutSidebar  onClick={toggleSidebar} className="text-sm font-medium leading-none"/>
           <Link to="/" className="text-sm font-medium leading-none">Memoirist</Link>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <UserMenu/>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
