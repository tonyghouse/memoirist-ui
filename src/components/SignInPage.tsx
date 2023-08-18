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

function SignInPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center border">
        {/* <SignIn routing="path" path="/sign-in" /> */}
        <div className="flex flex-row justify-center items-center  bg-red-500 h-[10vh]">Sign In first bro</div>
        <SignInButton mode="modal">
          <button className="btn">Log in/Signup</button>
        </SignInButton>
      </div>
    </>
  );
}

export default SignInPage;
