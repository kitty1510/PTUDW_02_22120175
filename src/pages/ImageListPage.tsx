import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { fetchImage, addData, img, type ImageItem } from "../data";

import ImageCard from "../components/ImageCard";

const ImageListPage = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const fetchImages = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await fetchImage(page);
      addData(res);
      if (img.length >= 100) setHasMore(false);
      setImages([...img]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    if (img.length === 0) fetchImages(); // chỉ fetch lần đầu
    else setImages([...img]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading &&
        hasMore
      ) {
        fetchImages();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchImages, loading, hasMore]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">
        Infinite Scroll Image List
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {images.map((img) => (
          <ImageCard
            onClick={() => navigate(`/photos/${img.id}`, { state: img })}
            key={img.id}
            imageUrl={img.download_url}
            title={img.title || `Photo #${img.id}`}
            author={img.author}
          />
        ))}
      </div>

      {loading && (
        <p className="text-center text-gray-600">Loading more images...</p>
      )}
      {!hasMore && (
        <p className="text-center text-gray-500 mt-4">
          No more photos to load 🎉
        </p>
      )}
    </div>
  );
};

export default ImageListPage;
