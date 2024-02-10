import { RedirectToSignIn, UserButton, UserProfile, useUser } from '@clerk/clerk-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import SignInPage from './SignInPage';

function UserProfilePage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  if (!isLoaded || !isSignedIn) {
    return <SignInPage />
  }


  return (
    <>
    <div className="flex flex-col justify-center items-end">
          <UserProfile />
      </div>
    </>
  )
}

export default UserProfilePage