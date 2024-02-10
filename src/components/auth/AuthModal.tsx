import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function AuthModal() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
         Try with demo creds
        </PopoverTrigger>
        <PopoverContent>
          <div>
          <div>Username: <span className=" p-1 ">demouser</span></div>
          <div>Password: <span className="p-1" >demopwd</span></div>
          </div>
        </PopoverContent>
      </Popover>

      <SignInButton mode="modal">
        SignIn / SignUp
      </SignInButton>
    </>
  );
}

export default AuthModal;
