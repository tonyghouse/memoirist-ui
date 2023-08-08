import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiOutlineLogin} from "react-icons/ai";
import {BsLayoutSidebar} from "react-icons/bs"

interface INavbarProps {
  sidebarInd: boolean;
  setSidebarInd: (value: boolean) => void;
}

function Navbar({ sidebarInd, setSidebarInd }: INavbarProps) {
  const toggleSidebar = () => {
    setSidebarInd(!sidebarInd);
  };
  
  return (
    <>
      <div
        className="border-[0.07rem] md:border-[0.09rem] border-[black] rounded-lg 
                    flex flex-row justify-between items-center px-[0.4rem]  py-[0.4rem]"
      >
        <div className="flex flex-row justify-start items-center gap-2">
          
          <BsLayoutSidebar
            onClick={toggleSidebar}
            className="w-[1.4rem] h-[1.4rem] md:w-[1.6rem] md:h-[1.6rem]"
          />
          
           {/* <RxTextAlignRight
            onClick={toggleSidebar}
            className="text-[1rem] md:text-[1.2rem] font-semibold "
          /> */}

          <div className="text-[0.7rem] md:text-[0.9rem] tracking-normal font-semibold ">
            Memoirist
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
        <AiOutlineLogin
            className="w-[1.4rem] h-[1.4rem] md:w-[1.6rem] md:h-[1.6rem]"
          />
        <div className="flex flex-row justify-end items-center">
          <Avatar className="w-[1.4rem] h-[1.4rem] md:w-[1.6rem] md:h-[1.6rem]">
            <AvatarImage src="https://avatars.githubusercontent.com/u/73288908?v=4" />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
        </div>
        </div>
      
      </div>
    </>
  );
}

export default Navbar;
