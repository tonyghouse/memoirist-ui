import React, { useContext, useEffect } from "react";
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
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { UserResource } from "@clerk/types";

function UserMenu() {
  const { user } = useUser();
  useEffect(()=>{
   console.log("logged in user ",user);
  },[]);



  if(!user){
    return null;
  }

  function getInitials(user: UserResource): React.ReactNode {
    if(user.fullName && user.fullName.length >=1){
      return user.fullName.charAt(0);
    }
    return "0"
  }

  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8 rounded-lg border-border border">
              <AvatarImage src={user.imageUrl} alt="@userprofile" />
              <AvatarFallback>{getInitials(user)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.fullName}</p>
              <p className="text-xs leading-none text-muted-foreground">
              @{user.username}
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
             <Link to="/menu/guides">
              <DropdownMenuItem>Guides</DropdownMenuItem>
             </Link>
           
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
           <DropdownMenuItem><SignOutButton/></DropdownMenuItem>
        
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default UserMenu;
