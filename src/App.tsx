import { BrowserRouter, Routes, Route } from "react-router-dom";

import ImageListPage from "./pages/ImageListPage";
import ImageDetailPage from "./pages/ImageDetailPage";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/PTUDW_02_22120175">
      <Routes>
        <Route path="/photos" element={<ImageListPage />} />
        <Route path="/photos/:id" element={<ImageDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
