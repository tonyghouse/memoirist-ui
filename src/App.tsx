import MasterLayout from "./components/MasterLayout";
import { Route, Routes, Link, Outlet, NavLink } from "react-router-dom";
import NavRoutes from "./components/NavRoutes";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";

import ThemeContextDefaultProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <>
      <ThemeContextDefaultProvider>
      <ErrorBoundary fallback={<ErrorPage/>}>
      <Routes>
        <Route path="/" element={<MasterLayout />} />
        <Route path="/nav/*" element={<NavRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      </ErrorBoundary>
      </ThemeContextDefaultProvider>
    
    </>
  );
}

export default App;
