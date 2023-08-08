import React from "react";
import { Separator } from "@/components/ui/separator";

function Sidebar({ setModuleId }: any) {

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
      className="my-2 mr-2 border-[0.07rem] md:border-[0.09rem]  border-[black] rounded-lg 
    h-full min-h-[100vh] min-w-[30%]  md:min-w-[15%]   flex flex-col items-center p-1 "
    >
      {/* <div className="mb-1"> */}
      {modules.map((val: any) => {
        return <div key={val.title} onClick={()=>changeModuleId(val.title)} 
        className="relative w-[95%] h-[20%] p-1 m-1 rounded-md hover:bg-[#F4F4F5] text-[0.6rem]  md:text-sm text-ellipsis whitespace-normal">
        {val.title}
      </div>
      })}
      {/* </div> */}

      <Separator className="my-4" />
      
      <div key="momento-mori" onClick={()=>changeModuleId("momento-mori")} 
        className="relative w-[95%] h-[20%] p-1 m-1 rounded-md hover:bg-[#F4F4F5] text-[0.6rem]   md:text-sm">
       Momento Mori
      </div>
      
      <div key="templates" onClick={()=>changeModuleId("templates")} 
        className="relative w-[95%] h-[20%] p-1 m-1 rounded-md hover:bg-[#F4F4F5] text-[0.6rem]   md:text-sm">
       Templates
      </div>
      
      <div key="search" onClick={()=>changeModuleId("search")} 
        className="relative w-[95%] h-[20%] p-1 m-1 rounded-md hover:bg-[#F4F4F5] text-[0.6rem]   md:text-sm">
       Search
      </div>

    </div>
  );
}

export default Sidebar;
