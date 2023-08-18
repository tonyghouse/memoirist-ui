import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "@/components/ui/button"


function SignInModal() {
  return (
    <>
      <SignInButton mode="modal">
        <Button variant="outline">SignIn / SignUp</Button>
      </SignInButton>
    </>
  );
}

export default SignInModal;
