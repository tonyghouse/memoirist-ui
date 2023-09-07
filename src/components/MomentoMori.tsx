import React, { useContext } from "react";
import Sidebar from "./Sidebar";

import { ISidebarContextType, SidebarContext } from "@/context/SidebarContext";
import { weeksBetween } from "../util/GenericUtil";
import { Button } from "./ui/button";

function MomentoMori() {
  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);
  const dateOfBirth = new Date("1997-08-28");;
  const expectedLife = 75;
  const noOfWeeks = 52*expectedLife;
  const remainingWeeks = weeksBetween(dateOfBirth,new Date());

  return (
    <>
      <div className="w-full h-full min-h-[100vh] flex flex-row">
        {sidebarContext.sidebarInd && <Sidebar setModuleId={"landingpage"} />}

        <div className="border-border border-[0.12rem] rounded-sm my-2 h-full min-h-[100vh] w-full">
          <div className="border-border border-[0.12rem] p-1 my-2 flex flex-row justify-start items-center gap-2">
            <Button variant="outline"> BirthDate : {dateOfBirth.toDateString()}</Button>
            <Button variant="outline"> ExpectedWeeks* : {noOfWeeks}</Button>
            <Button variant="outline"> RemainingWeeks : {remainingWeeks}</Button>
            
          </div>
        <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] md:grid-cols-[repeat(26,minmax(0,1fr))] gap-2 p-4">
           {[...Array(noOfWeeks).keys()].map((x,i)=>{
             return (
             <div key={i} className={`   ${remainingWeeks > i ? "bg-primary/30  hover:bg-primary" : "" }  
                                w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem] border border-border text-transparent`}>
              {i}
              </div>);
           })}
        </div>
        </div>
      </div> 
    </>
  );
}

export default MomentoMori;
