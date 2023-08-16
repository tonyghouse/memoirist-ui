import React ,{useContext} from "react";
import {LuCalendarDays} from "react-icons/lu";
import {GiSandsOfTime} from "react-icons/gi";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { IThemeContextType, ThemeContext } from "../context/ThemeContext";

function Sidebar({ setModuleId }: any) {
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const changeModuleId = (moduleId:string) => {
    setModuleId(moduleId);
  };

  const modules = [
    {
      title: "Today",
      pageId: "-",
    },
    {
      title: "Yesterday",
      pageId: "-",
    },
    {
      title: "28-01-2023",
      pageId: "-",
    },
    {
      title: "27-01-2023",
      pageId: "-",
    },
    {
      title: "26-01-2023",
      pageId: "-",
    },
    {
      title: "25-01-2023",
      pageId: "-",
    },
    {
      title: "24-01-2023",
      pageId: "-",
    },
    {
      title: "23-01-2023",
      pageId: "-",
    },
    {
      title: "22-01-2023",
      pageId: "-",
    },
    {
      title: "21-01-2023",
      pageId: "-",
    },
  ];
  return (
    <div
      className={` 
       border-border border rounded-sm 
      my-2 mr-2 

      h-full min-h-[100vh] min-w-fit  md:min-w-fit   flex flex-col items-center p-2`}
    >
      
      {modules.map((val: any) => {
        return <div key={val.title} onClick={()=>changeModuleId(val.title)} 
        // className="font-Inter w-[95%]   rounded-md  text-[0.6rem] leading-[0.9rem]
        //   md:text-[0.9rem] md:leading-[1.25rem] font-[420] hover:bg-accent m-1 
        //   " 
          className="font-Inter w-[95%]  rounded-md m-1 text-base leading-none"
          >
          <LuCalendarDays className="inline mr-1"/>
        {val.title}
      </div>
      })}
   

      <Separator className="my-4" />
      
      <div key="momento-mori" onClick={()=>changeModuleId("momento-mori")} 
         className="font-Inter w-[95%]   rounded-md  text-[0.6rem] leading-[0.9rem]
         md:text-[0.9rem] md:leading-[1.25rem] font-[380] hover:bg-accent m-1 
         py-[0.15rem] pl-1 my-[0.2rem] pr-6
         md:py-[0.2rem] md:pl-3 md:my-[0.4rem] md:pr-14">
       <GiSandsOfTime className="inline mr-1" /> Momento Mori
      </div>
      
      <div key="templates" onClick={()=>changeModuleId("templates")} 
        className="font-Inter w-[95%]   rounded-md  text-[0.6rem] leading-[0.9rem]
        md:text-[0.9rem] md:leading-[1.25rem] font-[380] hover:bg-accent m-1 
        py-[0.15rem] pl-1 my-[0.2rem] pr-6
        md:py-[0.2rem] md:pl-3 md:my-[0.4rem] md:pr-14">
       Templates
      </div>
      
      <div key="search" onClick={()=>changeModuleId("search")} 
         className="font-Inter w-[95%]   rounded-md  text-[0.6rem] leading-[0.9rem]
         md:text-[0.9rem] md:leading-[1.25rem] font-[380] hover:bg-accent m-1 
         py-[0.15rem] pl-1 my-[0.2rem] pr-6
         md:py-[0.2rem] md:pl-3 md:my-[0.4rem] md:pr-14">
       Search
      </div>
    </div>
  );
}

export default Sidebar;
