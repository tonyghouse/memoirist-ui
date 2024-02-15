import React, { useState, useRef, useEffect, useContext } from "react";
import "./CustomEditor.css";
import { EDITOR_JS_TOOLS } from "../config/editorJsToolsConfig"
import { RxPencil2 } from "react-icons/rx";
import { LogLevels } from "@/util/EditorLogLevels";
import { PuffLoader } from "react-spinners";

import EditorJS from "@editorjs/editorjs";
// import { LogLevels } from '@editorjs/editorjs/types'

// @ts-ignore
import DragDrop from 'editorjs-drag-drop';
// @ts-ignore
import Undo from 'editorjs-undo';

import { getEditorContent, saveEditorContent } from "../service/EditorService";

import { useUser } from "@clerk/clerk-react";
import { SectionInfo } from "../model/SectionInfo";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";
import { useSearchParams } from "react-router-dom";
import { ISidebarContextType, SidebarContext } from "@/context/SidebarContext";
import Sidebar from "./Sidebar";
import { getSectionName } from "@/service/SectionService";

const defaultData = {
  time: (new Date()).getTime(),
  version: '2.25.0',
  blocks: [{
    type: 'paragraph',
    data: {
      text: ''
    }
  }]
};

function CustomEditor() {
  const [searchParam, setSearchParam] = useSearchParams({ sectionId: null, sectionDate: null });

  const sidebarContext = useContext<ISidebarContextType>(SidebarContext);

  const sectionId = searchParam.get("sectionId");
  const sectionDate = searchParam.get("sectionDate");
  //xonsole.log("sectionId: ",sectionId);
  //xonsole.log("sectionDate: ",sectionDate);

  const isEditorInit = useRef(false);
  const editorJsInstance = useRef<EditorJS | null>();
  const editorContent = useRef({});
  const { user } = useUser();
  // const loadingEditor = useRef(false);;
  const [loadingEditor, setLoadingEditor] = useState<boolean>(false);
  const [data, setData] = useState<any>(defaultData);

  useEffect(() => {
  
    setLoadingEditor(true);
    const editorContent = getEditorContent(sectionId, sectionDate, (res) => {
      const dataFromAPI = { blocks: [...res.blocks] };

      // xonsole.log("data from API:>>>>" , dataFromAPI);
      const editorBlocks = dataFromAPI.blocks.length == 0 ? defaultData : dataFromAPI;
      // xonsole.log("editor blocks:>>>>" , editorBlocks);
      setData(editorBlocks);
      setLoadingEditor(false);


      if (editorJsInstance.current) {
        editorJsInstance.current.render(editorBlocks);
        // disableReadOnlyMode();
      }
    });



  }, [sectionId, sectionDate]);

  // useEffect(() => {
  //   if (loadingEditor) {
  //     enableReadOnlyMode();
  //   } else {
  //     disableReadOnlyMode();
  //   }

  // }, [loadingEditor]);

  const TIME_MS = 7500;
  useEffect(() => {

    const interval = setInterval(() => {
      saveEditorContent(user.id, sectionId, sectionDate, editorContent.current);
    }, TIME_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isEditorInit.current) {
      isEditorInit.current = true;
      // xonsole.log("Editor JS Instance: ", editorJsInstance.current);
      if (!editorJsInstance.current) {
        initEditor();
      }
    }

    return () => {
      if (editorJsInstance.current) {
        saveEditorContent(user.id, sectionId, sectionDate, editorContent.current);
        // xonsole.log("Destroying Editor JS Instance: ", editorJsInstance.current);
        editorJsInstance.current.destroy();
        editorJsInstance.current = null;
      }
    };
  }, []);



  const initEditor = () => {
    // xonsole.log("Initing Editor JS ...");
    const editor = new EditorJS({
      holder: "editorjs",
      logLevel: LogLevels.ERROR,
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
      readOnly: false,
      autofocus: true,
      data: data,
      onChange: async () => {
        let content = await editor.saver.save();
        //xonsole.log("saving from editorjs" ,content.blocks);
        editorContent.current = content;
      },

      tools: EDITOR_JS_TOOLS,
    });
    return editor;
  };

  const toggleReadOnlyMode = () => {
    if (editorJsInstance.current) {
      const editor = editorJsInstance.current;
      //xonsole.log("toggle() : ",editor.readOnly.isEnabled);
      editor.readOnly.toggle();
    }
  }

  const enableReadOnlyMode = () => {
    if (editorJsInstance.current) {
      const editor = editorJsInstance.current;
      const readMode = editor!.readOnly.isEnabled;
      //xonsole.log("disable() : ",editor.readOnly.isEnabled);
      if (!readMode) {
        editor.readOnly.toggle();
      }
    }
  }

  const disableReadOnlyMode = () => {
    if (editorJsInstance.current) {
      const editor = editorJsInstance.current;
      const readMode = editor!.readOnly.isEnabled;
      //xonsole.log("disable() : ",editor.readOnly.isEnabled);
      if (readMode) {
        editor.readOnly.toggle();
      }
    }
  }


  return (
    <>
      <div className="border-border border-t-[0.1rem]   h-full min-h-[100vh] w-full flex flex-row 
     mr-1 p-1">

        {sidebarContext.sidebarInd && <Sidebar setModuleId={"landingpage"} />}
        <div className=" w-full h-[100vh] flex flex-col ">
          <div className="flex flex-row w-full  rounded-none justify-between items-center my-1">
            <div className="bold mx-3">{ getTitleOfPage()}</div>
            {/* <Toggle onClick={toggleReadOnlyMode}><RxPencil2/></Toggle> */}
          </div>

          {loadingEditor && 
          (<div className="flex flex-col w-full items-center justify-center">
          <PuffLoader color="#808080" />
        </div>
        )}


          <div className=" w-full min-h-[100vh] h-full font-mono font-[400] text-sm z-1 ">
            <div
              key="editorjs"
              id="editorjs"
              className={`w-full h-auto ${loadingEditor ? "blur-3xl" : "blur-none"}`}
            ></div>
          </div>
        </div>

      </div>
    </>
  );

  function getTitleOfPage(): React.ReactNode {
      return getSectionName(sectionId);
  }
}

export default CustomEditor;
