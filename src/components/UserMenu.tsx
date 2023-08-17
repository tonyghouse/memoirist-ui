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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function UserMenu() {
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const toggleTheme = () => {
    themeContext.toggleThemeMode();
  };

  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Super User</p>
              <p className="text-xs leading-none text-muted-foreground">
                superuser@memoirist.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
             <Link to="/menu/profile">
              <DropdownMenuItem>Profile</DropdownMenuItem>
             </Link>
             <Link to="/menu/settings">
              <DropdownMenuItem>Settings</DropdownMenuItem>
             </Link>
             <Link to="/menu/features">
              <DropdownMenuItem>Features</DropdownMenuItem>
             </Link>
            <DropdownMenuItem onClick={toggleTheme} >
            Theme Mode <button >{themeContext.themeMode ==="dark" ?<RxMoon/>: <RxSun/>}</button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default UserMenu;
