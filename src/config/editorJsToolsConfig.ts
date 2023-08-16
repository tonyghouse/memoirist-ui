// @ts-ignore
import Embed from "@editorjs/embed";
// @ts-ignore
import Table from "@editorjs/table";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
// import Warning from '@editorjs/warning'
// @ts-ignore
import Code from "@editorjs/code";
// @ts-ignore
import LinkTool from "@editorjs/link";
// @ts-ignore
import Image from "@editorjs/image";
// @ts-ignore
import Raw from "@editorjs/raw";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import Marker from "@editorjs/marker";
// @ts-ignore
import CheckList from "@editorjs/checklist";
// @ts-ignore
import Delimiter from "@editorjs/delimiter";
// @ts-ignore
import InlineCode from "@editorjs/inline-code";
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
// @ts-ignore
import Tooltip from "editorjs-tooltip";

// @ts-ignore
import Paragraph from "@editorjs/paragraph";

export const EDITOR_JS_TOOLS = {
  paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
  embed: {
    class: Embed,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  marker: {
    class:Marker,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
 
  code: {
    class:Code,
    inlineToolbar: true,
  },
  linkTool: {
    class:LinkTool,
    inlineToolbar: true,
  },
  image: {
    class:Image,
    inlineToolbar: true,
  },
  raw: {
    class:Raw,
    inlineToolbar: true,
  },
  header: {
    class:Header,
    inlineToolbar: true,
  },
  quote: {
    class:Quote,
    inlineToolbar: true,
  },
  checklist: {
    class:CheckList,
    inlineToolbar: true,
  },
  delimiter: {
    class:Delimiter,
    inlineToolbar: true,
  },
  inlineCode: {
    class:InlineCode,
    inlineToolbar: true,
  },
  simpleImage: {
    class:SimpleImage,
    inlineToolbar: true,
  },
  tooltip: {
    class: Tooltip,
    
    config: {
      location: "left",
      highlightColor: "#FFEFD5",
      underline: true,
      backgroundColor: "#154360",
      textColor: "#FDFEFE",
      holder: "editorId",
    },
  },
};

// const editorJSToolsConfig = {
//   
//   header:Header,

//   quote: {
//     class: Quote,
//     inlineToolbar: true,
//     shortcut: 'CTRL+SHIFT+O',
//     config: {
//       quotePlaceholder: 'Enter a quote',
//       captionPlaceholder: 'Quote\'s author',
//     },
//   },

//   toggle: {
//     class: ToggleBlock,
//     inlineToolbar: false,
//   },

//   warning: {
//     class: Warning,
//     inlineToolbar: true,
//     shortcut: 'CTRL+SHIFT+W',
//     config: {
//       titlePlaceholder: 'Title',
//       messagePlaceholder: 'Message',
//     },

//     list: {
//       class: List,
//       inlineToolbar: true,
//       config: {
//         defaultStyle: 'unordered'
//       }
//     },

//     linkTool: {
//       class: LinkTool,
//       config: {
//         endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
//       }
//     },

//     attaches: {
//       class: AttachesTool,
//       config: {
//         endpoint: 'http://localhost:8008/uploadFile'
//       }
//     },

//     image: {
//       class: ImageTool,
//       config: {
//         endpoints: {
//           byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
//           byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
//         }
//       }
//     }
//   },
// };
