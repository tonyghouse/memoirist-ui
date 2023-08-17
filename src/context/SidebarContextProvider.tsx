import {
  useEffect,
  useState,
} from "react"
import { SidebarContext } from "./SidebarContext";

const SidebarContextDefaultProvider = (props: any) => {
  const [sidebarInd, setSidebarInd] = useState<boolean>(false);

  // useEffect(() => {
  //   //shadcn Sidebar changing
  //   if (userboolean === "dark") {
  //     document.documentElement.classList.add("dark")
  //   } else {
  //     document.documentElement.classList.remove("dark")
  //   }
    
  // }, [userboolean]);

  const toggleSidebarInd = () => {
    setSidebarInd(!sidebarInd);
  };

  return (
    <>
      <SidebarContext.Provider value={{
      sidebarInd:sidebarInd,
      toggleSidebarInd: toggleSidebarInd,
      }}>
        {props.children}
      </SidebarContext.Provider>
    </>
  );
}

export default SidebarContextDefaultProvider;
