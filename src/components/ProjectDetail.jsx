import React, { useState } from "react";

const ProjectDetail = ({ project, onClose }) => {
  const { name, descriptionDetail, videoUrl, images = [], source_code_link } = project;
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-full sm:max-w-4xl w-full mx-4 sm:mx-auto overflow-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
        <h2 className="text-3xl font-bold mb-4">{name}</h2>
        {/* Video Section */}
        {videoUrl && (
          <div className="mb-4">
            <video controls className="w-full rounded max-h-80 object-cover">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {/* Image Slider */}
        {images.length > 0 && (
          <div className="mb-4 relative">
            <img src={images[current]} alt={`slide ${current + 1}`} className="w-full rounded max-h-80 object-cover" />
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-700 text-white rounded-l">Prev</button>
                <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-700 text-white rounded-r">Next</button>
              </>
            )}
          </div>
        )}
        {/* Detailed Description */}
        <div className="mb-4">
          <p className="text-gray-700 text-base sm:text-lg">{descriptionDetail || "No detailed description provided."}</p>
        </div>
        {/* VS Code Link */}
        {source_code_link && (
          <div className="text-right">
            <a 
              href={source_code_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Open in VS Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
