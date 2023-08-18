
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import SidebarContextDefaultProvider from "./context/SidebarContextProvider";
import MasterLayout from "./components/MasterLayout";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    const k1 = import.meta.env.VITE_DUMMY_KEY_1;
    console.log("k1:::  ",k1);

    const k2 = import.meta.env.VITE_DUMMY_KEY_2;
    console.log("k2:::  ",k2);

    const k3 = import.meta.env.VITE_DUMMY_KEY_3;
    console.log("k3:::  ",k3);

    const k4 = import.meta.env.VITE_DUMMY_KEY_4;
    console.log("k4:::  ",k4);

    
   
      
         
   


    

   


    
  },[])

  return (
    <>
      <ThemeContextDefaultProvider>
        <SidebarContextDefaultProvider>
          {/* <MasterLayout /> */}

        </SidebarContextDefaultProvider>
      </ThemeContextDefaultProvider>
    </>
  );
}

export default App;
