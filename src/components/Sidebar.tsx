import React, { useContext, useState ,useEffect} from "react";
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
import {useUser } from "@clerk/clerk-react";
import { SectionInfo } from "../model/SectionInfo";
import DateChooser from "./DateChooser";

const API_URL = import.meta.env.VITE_MEMOIRIST_API_URL;

function Sidebar({ settingSectionInfo }: any) {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const [sections,setSections] = useState<any>([]);
  const { user } = useUser();

  useEffect(() => {
    
    async function fetchData() {
      var obj;
      const res = await fetch(`${API_URL}/sections/top/${user.id}`)
    
      obj = await res.json();
      setSections(obj);
    
    }
    fetchData();

  },[])

  const changeSectionInfo = (sectionInfo:SectionInfo) => {
    settingSectionInfo(sectionInfo);
  };

  const changePage = (pageId:string) => {
    
  };

  return (
    <div
      className={` 
       border-border border-[0.12rem] rounded-sm 
      my-2 mr-2 h-auto min-h-[100vh] w-full sm:w-[35%] md:w-[27%] lg:w-[17%]  flex flex-col p-2`}
    >

      <div className="h-auto min-h-[60vh]">
      {sections.map((val: SectionInfo) => {
        return (
            <Button key={val.sectionTitle}
              onClick={() => changeSectionInfo(val)}
              variant="link" className=" w-full font-[400] justify-start"
            >
              <LuCalendarDays key={val.sectionTitle} className="inline mr-2 " />
              {val.sectionTitle}
            </Button>
          
        );
      })}
      <DateChooser/>
        </div>
     

      <Separator className="my-4" />

      <Link
        to="/nav/momento-mori"
        onClick={() => changePage("momento-mori")}
        className="w-[95%]"
      >
       <Button variant="link" className=" w-full font-[400] justify-start">
       <GiSandsOfTime className="inline mr-1 " />
              Momento Mori
       </Button>
      </Link>

      <Link
        to="/nav/templates"
        onClick={() => changePage("templates")}
        className=" w-[95%]"
      >
       <Button variant="link" className=" w-full font-[400] justify-start">
       <TbTemplate className="inline mr-1 " />
       Templates
       </Button>
      </Link>

      <Link
        to="/nav/search"
        onClick={() => changePage("search")}
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
