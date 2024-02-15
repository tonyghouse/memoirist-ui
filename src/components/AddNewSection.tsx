import React, { useContext, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ISidebarContextType, SidebarContext } from "../context/SidebarContext";
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { saveNewSection } from "../service/SectionService";
import { getFormattedDate } from "../util/GenericUtil";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function AddNewSection() {
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);
  const sectionNameRef= useRef();
  const  [sectionType, setSectionType] = useState<string>("name");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [sectionName, setSectionName] = useState<string|null|undefined>();
  const { user } = useUser();
  const navigate = useNavigate();
  function changeSelectedValue(value: string): void {
   setSectionType(value);
  }

  function saveSectionName(): void {
    if(sectionType==="date"){
      saveNewSection(user.id,null, getFormattedDate(date));
      // navigate("/");
    }else{
      saveNewSection(user.id,sectionName,null);
      // navigate("/");
    }
  }

  return (
    <>
      <div className=" border-red-500 border-r-2 w-full h-full min-h-[100vh] flex flex-row my-2">
        {sidebarContext.sidebarInd && <Sidebar setModuleId={"landingpage"} />}
        <div className="flex flex-col h-[100vh] w-full ">
          <div className="bold text-lg p-4 w-full">Add New Date / Section</div>
          <div className="flex flex-row gap-3 mx-3">
         
          <Select onValueChange={changeSelectedValue}>
            <SelectTrigger className="w-[10rem]">
              <SelectValue placeholder="SectionType" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="date">Date</SelectItem>
            </SelectContent>
          </Select>


          {sectionType === "date" ?
         (
          <>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "min-w-fit w-[10rem] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-2" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          </>
          ): 
          <Input ref={sectionNameRef} onChange={(e)=>setSectionName(e.target.value)} className="w-[25rem]" placeholder="Enter Section Name" />}
          

          <Button onClick={saveSectionName} variant="secondary">Save</Button>

          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewSection;
