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
import UserMenu from "./auth/UserMenu";
import { Link, Outlet } from "react-router-dom";
import { SidebarContext,ISidebarContextType } from "@/context/SidebarContext";
import { SignInButton, useUser } from "@clerk/clerk-react";
import AuthModal from "./auth/AuthModal";
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
        
        flex flex-row justify-between items-center px-[0.4rem]  py-[0.5rem]`}>
        <div className="flex flex-row justify-start items-center gap-2">

            <Button variant="default" size="sm" className="">
            <Link to="/" >Memoirist</Link>
            </Button>
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
