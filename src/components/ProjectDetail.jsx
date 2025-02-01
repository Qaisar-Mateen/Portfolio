import React, { useState, useMemo, useCallback } from "react";
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

  // Fallback to document.body if "modal-root" is not found:
  const modalContainer = document.getElementById("modal-root") || document.body;

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
              <video controls className="w-full rounded max-h-60 object-cover">
                <source src={sliderMedia[current].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={sliderMedia[current].src} alt={`slide ${current + 1}`} className="w-full rounded max-h-60 object-cover" />
            )}
            {mediaCount > 1 && (
              <>
                <button onClick={prevMedia} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-700 text-white rounded-l">Prev</button>
                <button onClick={nextMedia} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-700 text-white rounded-r">Next</button>
              </>
            )}
          </div>
        )}
        <div className="h-[calc(100%-14rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-500">
          <div className="mb-4">
            <p className="text-secondary text-[16px] text-base sm:text-lg">
              {descriptionDetail || "No detailed description provided."}
            </p>
          </div>
        </div>
        {source_code_link && (
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="cssbuttons-io w-full"
            >
              <span>Open in VS Code</span>
            </button>
          </div>
        )}
      </div>
    </div>,
    modalContainer
  );
};

export default ProjectDetail;
