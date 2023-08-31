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
import { SignInButton, useUser } from "@clerk/clerk-react";
import AuthModal from "./AuthModal";
import { Button } from "./ui/button";
import { Toggle } from "@/components/ui/toggle"
import TitleBar from "./TitleBar";



function Navbar() {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);
  const { isLoaded, isSignedIn } = useUser();

  const toggleTheme = () => {
    themeContext.toggleThemeMode();
  };

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

           <Link to="/" >
            <Button variant="default" size="sm" className="">Memoirist</Button>
          </Link>
          { !(!isLoaded || !isSignedIn) && <Toggle variant="outline" size="sm" onClick={toggleSidebar} className="">
            <BsLayoutSidebar/></Toggle>}
           
        </div>

        <div className="flex flex-row gap-4 items-center">
          {(!isLoaded || !isSignedIn) ? <AuthModal/> : <UserMenu/>}
        <Toggle variant="outline" size="sm" onClick={toggleTheme} >
           <button >{themeContext.themeMode ==="dark" ?<RxMoon/>: <RxSun/>}</button>
        </Toggle>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
