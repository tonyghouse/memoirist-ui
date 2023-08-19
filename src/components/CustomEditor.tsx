import React, { useState, useRef, useEffect } from "react";
 import "./CustomEditor.css";
 import {EDITOR_JS_TOOLS} from "../config/editorJsToolsConfig"
// import {TbEdit} from "react-icons/tb";
import EditorJS from "@editorjs/editorjs";

// @ts-ignore
import DragDrop from 'editorjs-drag-drop';
// @ts-ignore
import Undo from 'editorjs-undo';

import { data } from "../util/data";




function CustomEditor() {
  const isEditorInit = useRef(false);
  const editorJsInstance = useRef<EditorJS | null>();

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
      onReady: () => {
        editorJsInstance.current = editor;


        const undo = new Undo({
          editor: editorJsInstance,
          config: {
            debounceTimer: 150,
            maxLength: 100,
            shortcuts: {
              undo: "CMD+Z",
              redo: "CMD+SHIFT+Z"
            }
          }
        });
        undo.initialize(data.blocks);


        new Undo({ editor });
        new DragDrop(editor);
      },
      autofocus: true,
      data: data,
      onChange: async () => {
        let content = await editor.saver.save();
        //console.log(content);
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
    <div className="border rounded-lg w-full h-full font-mono ">
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
