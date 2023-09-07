import React, { useContext, useState, useEffect, useTransition } from "react";
import { LuCalendar, LuTimer } from "react-icons/lu";
import { GiSandsOfTime } from "react-icons/gi";
import { TbTemplate, TbDeviceTabletSearch } from "react-icons/tb";
import { MdOutlineLibraryAdd } from "react-icons/md";

import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { SectionInfo } from "../model/SectionInfo";
import DateChooser from "./DateChooser";
import useFetch from "@/hooks/useFetch";
import { ResponseModel } from "@/model/ResponseModel";

const API_URL = import.meta.env.VITE_MEMOIRIST_API_URL;

function Sidebar({ settingSectionInfo }: any) {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const [sections, setSections] = useState<any>([]);
  // const [isSectionLoadPending, sectionLoadingTransition] =
  //   useState<boolean>(true);

  const [selectedSection, setSelectedSection] = useState<any>("add-new");

  const { user } = useUser();

  const { data, loading, error }: ResponseModel = useFetch(
    `${API_URL}/sections/top/${user.id}`,
    "GET"
  );

  useEffect(() => {
    if(!loading){
        setSections(data);
    }
  }, [data]);

  // async function fetchData() {
  //   var obj;

  //   obj =  res.data.json;
  //   setSections(obj);
  // }

  const changeSectionInfo = (sectionInfo: SectionInfo) => {
    setSelectedSection(sectionInfo.sectionTitle);
    // settingSectionInfo(sectionInfo);
  };

  const changePage = (pageId: string) => {};

  return (
    <div
      className={` 
       border-border border-[0.12rem] rounded-sm 
       mr-2 h-auto min-h-[100vh] w-full sm:w-[35%] md:w-[27%] lg:w-[17%]  flex flex-col p-2`}
    >
      <div className="h-auto min-h-[60vh]">
        <Link key="add-new" to="/section/add-new">
          <Button
            variant="outline"
            className=" w-full font-[400] justify-start  mr-2"
          >
            <MdOutlineLibraryAdd />
            <span className="ml-2">Add New</span>
          </Button>
        </Link>
        {loading ? (
          <Skeleton className="w-full h-full rounded-lg" />
        ) : (
          sections && sections.map((val: SectionInfo) => {
            return (
              <Link
              onClick={() => changeSectionInfo(val)}
                key={val.sectionTitle}
                to={`/section/?sectionId=${val.sectionId}&sectionDate=${val.sectionDate}`}
              >
                <Button
                 
                  variant={
                    selectedSection === val.sectionTitle ? "secondary" : "link"
                  }
                  className=" w-full font-[400] justify-start"
                >
                  <LuCalendar className="inline mr-2 " />
                  {val.sectionTitle}
                </Button>
              </Link>
            );
          })
        )}
        {/* <DateChooser/> */}
      </div>

      <Separator className="my-4" />

      <Link
        to="/nav/momento-mori"
        onClick={() => changePage("momento-mori")}
        className="w-[95%]"
      >
        <Button variant="link" className=" w-full font-[400] justify-start">
          <LuTimer className="inline mr-1 " />
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
