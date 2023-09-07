import { SectionInfo } from "../model/SectionInfo";

const API_URL = import.meta.env.VITE_MEMOIRIST_API_URL;
export const getEditorContent = (sectionId:String|null|undefined,
                             sectionDate:String|null|undefined, cb: any) => {
  const url = new URL(`${API_URL}/content`);
  let params={};

  if(sectionId){
    params["sectionId"] = sectionId;
  }

  if(sectionDate){
    params["sectionDate"] = sectionDate;
  }

  url.search = new URLSearchParams(params).toString();


  fetch(url)
    .then((response) => response.json())
    .then((result) => cb(result));
};

export const saveEditorContent = (
  userId: string,
  sectionId:String|null|undefined,
  sectionDate:String|null|undefined,
  content: any
): void => {
  if (!content.blocks) {
    return;
  }

  const contentsOrder = [];

  try {
    const req = {
      sectionId: sectionId,
      sectionDate: sectionDate,
      userId: userId,
      blocks: content.blocks,
      contentsOrder: contentsOrder,
    };

    postData(`${API_URL}/content`, req).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  } catch (err) {
    console.error("error while saving editor content");
  }
};

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
