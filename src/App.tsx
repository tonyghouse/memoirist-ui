
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import SidebarContextDefaultProvider from "./context/SidebarContextProvider";
import MasterLayout from "./components/MasterLayout";
import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";

function App() {

  return (
    <>
      <ThemeContextDefaultProvider>
        <SidebarContextDefaultProvider>
          <MasterLayout />
          <Toaster />
        </SidebarContextDefaultProvider>
      </ThemeContextDefaultProvider>
    </>
  );
}

export default App;
