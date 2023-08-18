
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import SidebarContextDefaultProvider from "./context/SidebarContextProvider";
import MasterLayout from "./components/MasterLayout";
import { useEffect } from "react";

function App() {
  useEffect(()=>{


    try{
      const Var1 = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
      console.log("Var1:::  ",Var1)
    } catch(e){
  console.log("error in Var2 ",e)
    }

    try{
      const Var2 = import.meta.env.VITE_DUMMY_KEY_ENV_FILE;
      console.log("Var2:::  ",Var2)
    } catch(e){
  console.log("error in Var2 ",e)
    }

    
    try{
      const Var3 = import.meta.env.VITE_DUMMY_KEY_ENV_FILE_EMBED;
      console.log("Var3:::  ",Var3)
    } catch(e){
  console.log("error in Var3 ",e)
    }


    
   
      
         
   


    

   


    
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
