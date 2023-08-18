import React, { useContext } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import SignInPage from "./SignInPage";
import ErrorPage from "./ErrorPage";
import SignUpPage from "./SignUpPage";
import HomeRoutes from "./HomeRoutes";
import NotFound from "./NotFound";

import { dark,neobrutalism,shadesOfPurple } from "@clerk/themes";
import { IThemeContextType, ThemeContext } from "@/context/ThemeContext";


// <Route
  //   path="/protected"
  //   element={
  //     <>
  //       <SignedIn>
  //         <ProtectedPage />
  //       </SignedIn>
  //       <SignedOut>
  //         <RedirectToSignIn />
  //       </SignedOut>
  //     </>
  //   }
  // />

function MasterLayout() {
    const themeContext = useContext<IThemeContextType>(ThemeContext);


  // if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  //   console.log("key seems to be missing")
  //   throw new Error("Missing Clerk Auth Publishable Key");
  // }
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  const navigate = useNavigate();

  return (
    <>
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}

        appearance={{
            baseTheme: themeContext.themeMode==="dark" ? dark: neobrutalism 
          }}
      >
        <ErrorBoundary fallback={<ErrorPage />}>
          <Routes>
            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />

            <Route path="/*" element={<HomeRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </ClerkProvider>
    </>
  );
}

export default MasterLayout;
