import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

const ProjectDetail = ({ project, onClose }) => {
  const { name, video, descriptionDetail, image = [], source_code_link } = project;

  const sliderMedia = useMemo(() => {
    const media = [];
    if (video) media.push({ type: "video", src: video });
    (Array.isArray(image) ? image : [image]).forEach((img) =>
      media.push({ type: "image", src: img })
    );
    return media;
  }, [video, image]);

  const [current, setCurrent] = useState(0);
  const mediaCount = sliderMedia.length;

  const nextMedia = useCallback(() => {
    setCurrent((prev) => (prev + 1) % mediaCount);
  }, [mediaCount]);

  const prevMedia = useCallback(() => {
    setCurrent((prev) => (prev - 1 + mediaCount) % mediaCount);
  }, [mediaCount]);

  const modalContainer = document.getElementById("modal-root") || document.body;

  // Add effect to prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDOM.createPortal(
    <div onClick={onClose} className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-lg p-4 sm:p-6 md:p-8 w-full sm:w-3/4 md:w-1/2 h-[90vh] mx-4 sm:mx-auto overflow-hidden"
        style={{ backgroundColor: "#222020" }}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold text-white">&times;</button>
        <h2 className="text-3xl font-bold mb-4 text-white">{name}</h2>
        {mediaCount > 0 && (
          <div className="mb-4 relative">
            {sliderMedia[current].type === "video" ? (
              <video controls className="w-full rounded max-h-60 object-contain">
                <source src={sliderMedia[current].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={sliderMedia[current].src} alt={`slide ${current + 1}`} className="w-full rounded max-h-60 object-contain" />
            )}
            {mediaCount > 1 && (
              <>
                <button 
                  onClick={prevMedia} 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-gray-700 bg-opacity-50 rounded-full hover:bg-opacity-75 hover:scale-105 transition-all duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextMedia} 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-gray-700 bg-opacity-50 rounded-full hover:bg-opacity-75 hover:scale-105 transition-all duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        )}
        {/* Move View Code button here, removing absolute positioning */}
        {source_code_link && (
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-xl font-bold">Detail Description</h3>
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="cssbuttons-io"
            >
              <span>View Code</span>
            </button>
          </div>
        )}
        {/* Updated scroll container with better height calculation and bottom padding */}
        <div className="h-[calc(100%-22rem)] overflow-y-auto pr-2 
          scrollbar-thin 
          scrollbar-thumb-gray-500 
          hover:scrollbar-thumb-gray-400 
          scrollbar-track-transparent 
          scrollbar-thumb-rounded-full"
        >
          <div className="mb-4 pb-8"> {/* Added bottom padding */}
            <p className="text-secondary text-[16px] text-base sm:text-lg">
              {descriptionDetail || "No detailed description provided."}
            </p>
          </div>
        </div>
      </div>
    </div>,
    modalContainer
  );
};

export default ProjectDetail;
