import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ImageItem {
  id: string;
  author: string;
  download_url: string;
}

const ImageDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [photo, setPhoto] = useState<ImageItem | null>(
    (location.state as ImageItem) || null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch image if not passed via state (direct URL visit)
    if (!photo && id) {
      setLoading(true);
      fetch(`https://picsum.photos/id/${id}/info`)
        .then((res) => res.json())
        .then((data) => setPhoto(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [id, photo]);

  if (loading) return <p className="text-center p-6">Loading...</p>;
  if (!photo) return <p className="text-center p-6">Photo not found.</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="text-center">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow"
        />
        <h2 className="text-2xl font-semibold mt-4">
          {`Photo by ${photo.author}`}
        </h2>
        <p className="text-gray-600 mt-2">
          {`"${photo.author}'s work — A random masterpiece from Lorem Picsum."`}
        </p>
        <p className="text-gray-500 italic mt-1">
          (Placeholder description: Beautiful visual captured by {photo.author}
          .)
        </p>
      </div>
    </div>
  );
};

export default ImageDetailPage;
