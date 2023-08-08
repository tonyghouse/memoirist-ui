import MasterLayout from "./components/MasterLayout";
import { Route, Routes, Link, Outlet, NavLink } from "react-router-dom";
import NavRoutes from "./components/NavRoutes";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />} />
        <Route path="/nav/*" element={<NavRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </>
  );
}

export default App;
