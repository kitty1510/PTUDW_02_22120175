import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ImageListPage from "./pages/ImageListPage";
import ImageDetailPage from "./pages/ImageDetailPage";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/PTUDW_02_22120175">
      <Routes>
        {/* Redirect trang gốc sang /photos */}
        <Route path="/" element={<Navigate to="/photos" replace />} />

        <Route path="/photos" element={<ImageListPage />} />
        <Route path="/photos/:id" element={<ImageDetailPage />} />

        {/* Fallback cho bất kỳ URL lạ nào */}
        <Route path="*" element={<Navigate to="/photos" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
