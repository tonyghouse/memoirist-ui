import React, { useContext } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { GiSandsOfTime } from "react-icons/gi";
import { TbTemplate, TbDeviceTabletSearch } from "react-icons/tb";

import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Sidebar({ setModuleId }: any) {
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const changeModuleId = (moduleId: string) => {
    console.log("moduleId: ", moduleId);
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
      title: "28 Jan 2023",
      pageId: "-",
    },
    {
      title: "27 Jan 2023",
      pageId: "-",
    },
    {
      title: "26 Jan 2023",
      pageId: "-",
    },
    {
      title: "25 Jan 2023",
      pageId: "-",
    },
    {
      title: "24 Jan 2023",
      pageId: "-",
    },
    {
      title: "23 Jan 2023",
      pageId: "-",
    },
    {
      title: "22 Jan 2023",
      pageId: "-",
    },
    {
      title: "21 Jan 2023",
      pageId: "-",
    },
  ];
  return (
    <div
      className={` 
       border-border border-[0.12rem] rounded-sm 
      my-2 mr-2 h-auto min-h-[100vh] min-w-fit  md:min-w-fit   flex flex-col p-2`}
    >
      {modules.map((val: any) => {
        return (
            <Button key={val.title}
              onClick={() => changeModuleId(val.title)}
              variant="link" className=" w-full font-[400] justify-start"
            >
              <LuCalendarDays className="inline mr-2 " />
              {val.title}
            </Button>
          
        );
      })}

      <Separator className="my-4" />

      <Link
        to="/nav/momento-mori"
        onClick={() => changeModuleId("momento-mori")}
        className="w-[95%]"
      >
       <Button variant="link" className=" w-full font-[400] justify-start">
       <GiSandsOfTime className="inline mr-1 " />
              Momento Mori
       </Button>
      </Link>

      <Link
        to="/nav/templates"
        onClick={() => changeModuleId("templates")}
        className=" w-[95%]"
      >
       <Button variant="link" className=" w-full font-[400] justify-start">
       <TbTemplate className="inline mr-1 " />
       Templates
       </Button>
      </Link>

      <Link
        to="/nav/search"
        onClick={() => changeModuleId("search")}
        className=" w-[95%]"
      >
       <Button variant="link" className=" w-full font-[400] justify-start">
       <TbDeviceTabletSearch className="inline mr-1 " />
       Search
       </Button>
      </Link>

    </div>
  );
}

export default Sidebar;
