
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import SidebarContextDefaultProvider from "./context/SidebarContextProvider";
import MasterLayout from "./components/MasterLayout";
import { useEffect } from "react";

function App() {
  useEffect(()=>{


    try{
      const viteStyledRailwayVar = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
      console.log("viteStyledRailwayVar:::  ",viteStyledRailwayVar)
    } catch(e){
  console.log("error in viteStyledRailwayVar ",e)
    }


    try{
    const reactStyledRailwayVar = process.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
    console.log("reactStyledRailwayVar:::  ",reactStyledRailwayVar)
    } catch(e){
   console.log("error in reactStyledRailwayVar ",e)
    }

    try{
      const envFileViteStyledVar = import.meta.env.DUMMY_KEY_ENV_FILE;
      console.log("envFileViteStyledVar:::  ",envFileViteStyledVar)
      } catch(e){
     console.log("error in envFileViteStyledVar ",e)
      }

      try{
        const envFileReactStyledVar = process.env.DUMMY_KEY_ENV_FILE;
    console.log("envFileReactStyledVar:::  ",envFileReactStyledVar)
        } catch(e){
      console.log("error in envFileReactStyledVar ",e)
        }
     

        try{
          const envFileViteStyledVar2 = import.meta.env.VITE_DUMMY_KEY_ENV_FILE;
          console.log("envFileViteStyledVar2:::  ",envFileViteStyledVar2)
          } catch(e){
         console.log("error in envFileViteStyledVar 2",e)
          }
    
          try{
            const envFileReactStyledVar2 = process.env.DUMMY_KEY_ENV_FILE;
        console.log("envFileReactStyledVar2:::  ",envFileReactStyledVar2)
            } catch(e){
          console.log("error in envFileReactStyledVar ",e)
            }

            try{
              const envFileViteStyledVarEmbed = import.meta.env.VITE_DUMMY_KEY_ENV_FILE_EMBED;
              console.log("envFileViteStyledVarEmbed:::  ",envFileViteStyledVarEmbed)
              } catch(e){
             console.log("error in envFileViteStyledVarEmbed",e)
              }
        
              try{
                const envFileReactStyledVarEmbed = process.env.DUMMY_KEY_ENV_FILE_EMBED;
            console.log("envFileReactStyledVarEmbed:::  ",envFileReactStyledVarEmbed)
                } catch(e){
              console.log("error in envFileReactStyledVarEmbed ",e)
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
