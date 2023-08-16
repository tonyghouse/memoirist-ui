import React, { useState, useRef, useEffect } from "react";
 import "./CustomEditor.css";
import {TbEdit} from "react-icons/tb";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import Warning from "@editorjs/Warning";
// @ts-ignore
import DragDrop from 'editorjs-drag-drop';
// @ts-ignore
import Undo from 'editorjs-undo';
// @ts-ignore
import ToggleBlock from 'editorjs-toggle-block';

// @ts-ignore
import AttachesTool from '@editorjs/attaches';

// @ts-ignore
import ImageTool from '@editorjs/image';

// @ts-ignore
import LinkTool from '@editorjs/link';

// @ts-ignore
import List from '@editorjs/list';


import { data } from "../util/data";

const editorJSToolsConfig = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  header:Header,

  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CTRL+SHIFT+O',
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: 'Quote\'s author',
    },
  },

  toggle: {
    class: ToggleBlock,
    inlineToolbar: false,
  },

  warning: {
    class: Warning,
    inlineToolbar: true,
    shortcut: 'CTRL+SHIFT+W',
    config: {
      titlePlaceholder: 'Title',
      messagePlaceholder: 'Message',
    },

    list: {
      class: List,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      }
    },

    linkTool: {
      class: LinkTool,
      config: {
        endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
      }
    },

    attaches: {
      class: AttachesTool,
      config: {
        endpoint: 'http://localhost:8008/uploadFile'
      }
    },

    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        }
      }
    }
  },
};


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

      tools: editorJSToolsConfig,
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
    <div className="border rounded-lg w-full h-full relative">
{/* 
    <div className ="border w-[30%] absolute z-[3]  text-right">
    <button onClick={toggleReadOnlyMode}>
     <TbEdit className="text-md"/>
      </button>
    </div> */}

      <div
        key="editorjs"
        id="editorjs"
        className="w-full h-full absolute z-[2]"
      ></div>
    </div>
    </>
  );
}

export default CustomEditor;
