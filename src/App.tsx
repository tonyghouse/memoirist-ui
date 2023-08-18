
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import SidebarContextDefaultProvider from "./context/SidebarContextProvider";
import MasterLayout from "./components/MasterLayout";

function App() {
  

  return (
    <>
      <ThemeContextDefaultProvider>
        <SidebarContextDefaultProvider>
          <MasterLayout />
        </SidebarContextDefaultProvider>
      </ThemeContextDefaultProvider>
    </>
  );
}

export default App;
