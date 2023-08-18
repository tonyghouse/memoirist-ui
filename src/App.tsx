import { Route, Routes, Link, Outlet, NavLink } from "react-router-dom";
import NavRoutes from "./components/NavRoutes";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";

import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import SidebarContextDefaultProvider from "./context/SidebarContextProvider";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import MenuRoutes from "./components/MenuRoutes";

function App() {
  return (
    <>
      <ThemeContextDefaultProvider>
        <SidebarContextDefaultProvider>
        <ErrorBoundary >
        <p>GHOUSE_ENV: {process.env.GHOUSE_ENV}</p>
          <Routes>
            <Route path="/" element={<Navbar />}>
                  <Route index element={<HomeSection />}/>
                  <Route path="/nav/*" element={<NavRoutes />} />
                  <Route path="/menu/*" element={<MenuRoutes />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
        </SidebarContextDefaultProvider>
      </ThemeContextDefaultProvider>
    </>
  );
}

export default App;
