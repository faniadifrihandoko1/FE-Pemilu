import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import InfoPemilu from "./pages/InfoPemilu";
import BlogDetail from "./pages/BlogDetail";
import Dashboard from "./pages/Admin/Dashboard";

import TambahPaslon from "./pages/Admin/TambahPaslon";
import TambahPartai from "./pages/Admin/TambahPartai";
import NotFound from "./pages/NotFound";
import DaftarPaslon from "./pages/Admin/DaftarPaslon";
import DaftarPartai from "./pages/Admin/DaftarPartai";
import IsAdmin from "./routes/IsAdmin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vote" element={<InfoPemilu />} />
      <Route path="/blog/:id" element={<BlogDetail />} />

      <Route
        path="/admin"
        element={
          <IsAdmin>
            <Dashboard />
          </IsAdmin>
        }
      />
      <Route
        path="/admin/list-paslon"
        element={
          <IsAdmin>
            <DaftarPaslon />
          </IsAdmin>
        }
      />
      <Route
        path="/admin/list-partai"
        element={
          <IsAdmin>
            <DaftarPartai />
          </IsAdmin>
        }
      />
      <Route
        path="/admin/add-paslon"
        element={
          <IsAdmin>
            <TambahPaslon />
          </IsAdmin>
        }
      />
      <Route
        path="/admin/add-partai"
        element={
          <IsAdmin>
            <TambahPartai />
          </IsAdmin>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
