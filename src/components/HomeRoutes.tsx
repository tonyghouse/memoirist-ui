import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Templates from "./Templates";
import SearchPage from "./SearchPage";
import MomentoMori from "./MomentoMori";
import HomeSection from "./HomeSection";
import MenuRoutes from "./UserMenuRoutes";
import NavRoutes from "./NavRoutes";

import { UserButton, useUser,RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./Navbar";
import UserMenuRoutes from "./UserMenuRoutes";
import SignInPage from "./SignInPage";
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";

function HomeRoutes() {

  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  if (!isLoaded || !isSignedIn) {
    console.log("user not signed in");
    // return <RedirectToSignIn />
    return <LandingPage />
  }

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/nav/*" element={<NavRoutes />} />
        <Route path="/menu/*" element={<UserMenuRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     <Outlet></Outlet>
    </>
  );
}

export default HomeRoutes;
