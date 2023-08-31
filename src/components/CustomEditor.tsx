import React, { useState, useRef, useEffect } from "react";
 import "./CustomEditor.css";
 import {EDITOR_JS_TOOLS} from "../config/editorJsToolsConfig"
// import {TbEdit} from "react-icons/tb";
import EditorJS from "@editorjs/editorjs";
// import { LogLevels } from '@editorjs/editorjs/types'

// @ts-ignore
import DragDrop from 'editorjs-drag-drop';
// @ts-ignore
import Undo from 'editorjs-undo';

import {getEditorContent, saveEditorContent } from "../service/EditorService";

import {useUser } from "@clerk/clerk-react";
import { SectionInfo } from "../model/SectionInfo";

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
    // console.log("re rendering custom editor");
    // console.log("section id inside editor ",sectionKey);
    const editorContent = getEditorContent(sectionInfo, (res) => {
      console.log(res.blocks);
      const dataFromAPI = { blocks: [...res.blocks] };

      const editorBlocks = res.blocks.length === 0 ?  defaultData : dataFromAPI;
      setData(editorBlocks);
     
      editorJsInstance.current.render(editorBlocks)
    
    });
    console.log("editorContent id inside editor ",editorContent);


  },[])

  const TIME_MS = 7500;
  useEffect(() => {
   
    const interval = setInterval(() => {
      saveEditorContent(user.id,sectionInfo,editorContent.current);
    }, TIME_MS);
  
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (!isEditorInit.current) {
      isEditorInit.current = true;
      console.log("Editor JS Instance: ", editorJsInstance.current);
      if (!editorJsInstance.current) {
        initEditor();
      }
    }

    return () => {
      if (editorJsInstance.current) {
        saveEditorContent(user.id,sectionInfo,editorContent.current);
        console.log("Destroying Editor JS Instance: ", editorJsInstance.current);
        editorJsInstance.current.destroy();
        editorJsInstance.current = null;
      }
    };
  }, []);



  const initEditor = () => {
    console.log("Initing Editor JS ...");
    const editor = new EditorJS({
      holder: "editorjs",
      
      // logLevel: LogLevels.ERROR,
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
      autofocus: true,
      data: data,
      onChange: async () => {
        let content = await editor.saver.save();
        console.log("saving from editorjs" ,content.blocks);
        editorContent.current = content;
      },

      tools: EDITOR_JS_TOOLS,
    });
    return editor;
  };

  const toggleReadOnlyMode = () =>{
    if(editorJsInstance.current){
      const editor = editorJsInstance.current;
      editor.readOnly.toggle();
    }
  }

  return (
    <>
    <div  className="border rounded-lg w-full min-h-[100vh] h-full font-mono font-[400] text-sm ">
{/* 
    <div className ="border w-[30%] absolute z-[3]  text-right">
    <button onClick={toggleReadOnlyMode}>
     <TbEdit className="text-md"/>
      </button>
    </div> */}

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
