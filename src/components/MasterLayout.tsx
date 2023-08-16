import React ,{useState} from "react";
import ErrorBoundary from "./ErrorBoundary";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";


function MasterLayout() {
    const [sidebarInd,setSidebarInd] = useState<boolean>(false);
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <div className="mx-3 my-2">
          <Navbar sidebarInd={sidebarInd} setSidebarInd={setSidebarInd} />
          <HomeSection sidebarInd={sidebarInd}/>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default MasterLayout;
