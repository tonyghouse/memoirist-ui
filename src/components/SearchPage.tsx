import React, { useContext } from "react";
import Sidebar from "./Sidebar";

import { ISidebarContextType, SidebarContext } from "../context/SidebarContext";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

function SearchPage() {
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  return (
    <>
      <div className="w-full h-full min-h-[100vh] flex flex-row">
        {sidebarContext.sidebarInd && <Sidebar setModuleId={"landingpage"} />}

        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Today</CommandItem>
              <CommandItem>Yesterday</CommandItem>
              <CommandItem>LastWeek</CommandItem>
              <CommandItem>MostViewed</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </>
  );
}

export default SearchPage;
