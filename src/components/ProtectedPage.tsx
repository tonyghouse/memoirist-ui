import React from "react";
import { UserButton, useUser,RedirectToSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function ProtectedPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  if (!isLoaded || !isSignedIn) {
    return <RedirectToSignIn />
    // navigate("/sign-in");
  }
  return (
    <>
      <h1>Protected page by ghouse</h1>
      <UserButton />
    </>
  );
}

export default ProtectedPage;
