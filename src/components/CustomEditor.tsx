import React, { useState, useRef, useEffect } from "react";
 import "./CustomEditor.css";
 import {EDITOR_JS_TOOLS} from "../config/editorJsToolsConfig"
import {RxPencil2} from "react-icons/rx";
import { LogLevels } from "@/util/EditorLogLevels";

import EditorJS from "@editorjs/editorjs";
// import { LogLevels } from '@editorjs/editorjs/types'

// @ts-ignore
import DragDrop from 'editorjs-drag-drop';
// @ts-ignore
import Undo from 'editorjs-undo';

import {getEditorContent, saveEditorContent } from "../service/EditorService";

import {useUser } from "@clerk/clerk-react";
import { SectionInfo } from "../model/SectionInfo";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";

const defaultData={
  time: (new Date()).getTime(),
  version: '2.25.0',
  blocks: [{
	type: 'paragraph',
	data: {
	  text: ''
	}
  }]};
  
function CustomEditor({sectionInfo}:any) {
  const isEditorInit = useRef(false);
  const editorJsInstance = useRef<EditorJS | null>();
  const editorContent = useRef({});
  const { user } = useUser();

  const [data,setData] = useState<any>(defaultData);

  useEffect(()=>{
    const editorContent = getEditorContent(sectionInfo, (res) => {
      const dataFromAPI = { blocks: [...res.blocks] };
      
      // Xconsole.log("data from API:>>>>" , dataFromAPI);
      const editorBlocks = dataFromAPI.blocks.length == 0 ?  defaultData : dataFromAPI;
      // Xconsole.log("editor blocks:>>>>" , editorBlocks);
      setData(editorBlocks);
     
      if(editorJsInstance.current){
        editorJsInstance.current.render(editorBlocks);
        // disableReadOnlyMode();
      }
    });



  },[]);

  const TIME_MS = 75000;
  useEffect(() => {
   
    const interval = setInterval(() => {
      saveEditorContent(user.id,sectionInfo,editorContent.current);
    }, TIME_MS);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isEditorInit.current) {
      isEditorInit.current = true;
      // XConsole.log("Editor JS Instance: ", editorJsInstance.current);
      if (!editorJsInstance.current) {
        initEditor();
      }
    }

    return () => {
      if (editorJsInstance.current) {
        saveEditorContent(user.id,sectionInfo,editorContent.current);
        // XConsole.log("Destroying Editor JS Instance: ", editorJsInstance.current);
        editorJsInstance.current.destroy();
        editorJsInstance.current = null;
      }
    };
  }, []);



  const initEditor = () => {
    // XConsole.log("Initing Editor JS ...");
    const editor = new EditorJS({
      holder: "editorjs",
      logLevel:LogLevels.ERROR,
      onReady: () => {
        editorJsInstance.current = editor;


        const undo = new Undo({
          editor: editorJsInstance.current,
          config: {
            debounceTimer: 150,
            maxLength: 100,
            shortcuts: {
              undo: "CTRL+Z",
              redo: "CTRL+SHIFT+Z"
            }
          }
        });
        undo.initialize(data);


        new Undo({ editor });
        new DragDrop(editor);
        
      },
      readOnly:true,
      autofocus: true,
      data: data,
      onChange: async () => {
        let content = await editor.saver.save();
        // console.log("saving from editorjs" ,content.blocks);
        editorContent.current = content;
      },

      tools: EDITOR_JS_TOOLS,
    });
    return editor;
  };

  const toggleReadOnlyMode = () =>{
    if(editorJsInstance.current){
      const editor = editorJsInstance.current;
      console.log("toggle() : ",editor.readOnly.isEnabled);
      editor.readOnly.toggle();
    }
  }

  const disableReadOnlyMode = () =>{
    if(editorJsInstance.current){
      const editor = editorJsInstance.current;
      const readMode = editor!.readOnly.isEnabled;
      console.log("disable() : ",editor.readOnly.isEnabled);
      if(readMode){
        editor.readOnly.toggle(); 
      }
    }
  }


  return (
    <>
    <div className="flex flex-row w-full border rounded-lg justify-between items-center mb-1">
          <div className="bold mx-3">{sectionInfo && sectionInfo.sectionTitle}</div>
         <Toggle onClick={toggleReadOnlyMode}><RxPencil2/></Toggle>
    </div>
    <div  className="border rounded-lg w-full min-h-[100vh] h-full font-mono font-[400] text-sm z-1 ">
      <div
        key="editorjs"
        id="editorjs"
        className="w-full h-auto "
      ></div>
    </div>
    </>
  );
}

export default CustomEditor;
