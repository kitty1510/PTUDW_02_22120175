import { BrowserRouter, Routes, Route } from "react-router-dom";

import ImageListPage from "./pages/ImageListPage";
import ImageDetailPage from "./pages/ImageDetailPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photos" element={<ImageListPage />} />
        <Route path="/photos/:id" element={<ImageDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
