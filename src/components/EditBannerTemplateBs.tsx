import React, { useState } from 'react';
import { Banner } from '../../types/banner';

type EditBannerProps = {
  banner: Banner;
  onSave: (banner: Banner) => void;
  onClose: () => void;
};

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [formData, setFormData] = useState<Banner>(banner);
  const [selectedImage, setSelectedImage] = useState<string>(banner.image);

  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    setFormData({ ...formData, image });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md mx-auto">
        <h2 className="text-lg font-bold mb-4">Edit Banner</h2>
        <div className="mb-4">
          <img src={selectedImage} alt="Selected" className="w-full h-40 object-cover rounded mb-2" />
          <div className="flex space-x-2">
            {images.map((img, index) => (
              <button key={index} onClick={() => handleImageSelect(img)}>
                <img src={img} alt={`Thumbnail ${index}`} className="w-12 h-12 object-cover rounded-full border-2" />
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cta">CTA Text</label>
          <input
            id="cta"
            type="text"
            name="cta"
            value={formData.cta}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleSave}>
            Save
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
