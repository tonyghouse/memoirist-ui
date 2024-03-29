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
import SignInPage from "./auth/SignInPage";
import ErrorPage from "./ErrorPage";
import SignUpPage from "./auth/SignUpPage";
import HomeRoutes from "./HomeRoutes";
import NotFound from "./NotFound";

import { dark,neobrutalism,shadesOfPurple } from "@clerk/themes";
import { IThemeContextType, ThemeContext } from "@/context/ThemeContext";
import SignInModal from "./auth/AuthModal";

function MasterLayout() {
    const themeContext = useContext<IThemeContextType>(ThemeContext);


  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Clerk Auth Publishable Key");
  }
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  const navigate = useNavigate();

  return (
    <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}

        appearance={{
          baseTheme: themeContext.themeMode ==="dark" ? dark: null ,
          elements: {
            formButtonPrimary: 'bg-accent-foreground text-secondary hover:bg-popover-foreground'
          }
          }}
      >
        <ErrorBoundary fallback={<ErrorPage />}>
          <div className={"mx-1 my-1 min-h-screen bg-background font-inter "} >
          <Routes>
            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />
            <Route path="/*" element={<HomeRoutes />} />
          </Routes>
         </div>
        </ErrorBoundary>
      </ClerkProvider>
  );
}

export default MasterLayout;
