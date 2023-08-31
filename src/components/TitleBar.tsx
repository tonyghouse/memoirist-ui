import { Toggle } from '@radix-ui/react-toggle'
import React from 'react'
import {FiEdit2} from "react-icons/fi";

function TitleBar() {
  return (
    <div className="hidden md:flex flex-row items-center justify-center border-border border-1 bg-accent w-[50%]">
       
       <div>Module Title</div>  
       <Toggle><FiEdit2/></Toggle>
    </div>
  )
}

export default TitleBar