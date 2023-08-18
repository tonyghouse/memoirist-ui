import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";

function SignUpPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
      <SignUp routing="path" path="/sign-up" />
      </div>
    </>
  );
}

export default SignUpPage;
