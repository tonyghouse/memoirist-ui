import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";
import AuthModal from "./AuthModal";

function SignInPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center border">
       <AuthModal/>
      </div>
    </>
  );
}

export default SignInPage;
