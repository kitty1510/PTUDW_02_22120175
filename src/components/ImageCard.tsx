interface ImageCardProps {
  imageUrl: string;
  title: string;
  author: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  author,
  onClick,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
      >
        <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex flex-col justify-end p-3 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-200">by {author}</p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
