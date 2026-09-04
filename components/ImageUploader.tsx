import React, { useState, useEffect } from 'react';
import { ImageUploaderProps } from '../types';

const ImageUploader: React.FC<ImageUploaderProps> = ({ currentImage, id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // Sync internal state with props and reset loading when image changes
  useEffect(() => {
    setIsLoading(true); // Reset loading state when url changes
    setHasError(false);
  }, [currentImage]);

  return (
    <div 
      className="relative flex-shrink-0"
    >
      <div className={`
        w-20 h-20 md:w-[150px] md:h-[150px] 
        rounded-full 
        overflow-hidden 
        border-4 border-white/30 
        shadow-inner
        flex items-center justify-center
        relative
        bg-gray-200/50 backdrop-blur-sm
      `}>
        {/* SKELETON LOADER: Shows while loading */}
        {currentImage && isLoading && !hasError && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse z-10" />
        )}

        {currentImage && !hasError ? (
          <img 
            src={currentImage} 
            alt="Game thumbnail" 
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        ) : (
          <div className="text-center p-2 flex flex-col items-center">
             {/* Fallback Icon if error or no image */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;