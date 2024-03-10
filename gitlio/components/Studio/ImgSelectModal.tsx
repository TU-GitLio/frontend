interface ImageSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (image: string) => void;
  images: string[];
}

const ImageSelectionModal: React.FC<ImageSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  images,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg">이미지 선택</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle">
            ×
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`선택 가능한 이미지 ${index + 1}`}
              className="cursor-pointer"
              onClick={() => onSelect(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSelectionModal;
