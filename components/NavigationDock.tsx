import React, { useState } from 'react';
import { Home, Grid, FileText, Settings, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

interface NavigationDockProps {
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
  onLogos: () => void;
  onOpenSettings: () => void;
  totalSlides: number;
  currentSlide: number;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  onNext,
  onPrev,
  onHome,
  onLogos,
  onOpenSettings,
  totalSlides,
  currentSlide,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 pt-12 pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          pointer-events-auto
          flex items-center gap-3 px-6 py-4 
          bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl
          transition-all duration-500 ease-in-out transform
          ${isHovered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[60%] opacity-50 scale-95 hover:translate-y-0 hover:opacity-100'}
        `}
      >
        <button 
          onClick={onPrev}
          className="p-3 rounded-xl hover:bg-gray-200/50 transition-colors text-gray-700 active:scale-95"
          title="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <button 
          onClick={onHome}
          className={`p-3 rounded-xl transition-colors active:scale-95 ${currentSlide === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'hover:bg-gray-200/50 text-gray-700'}`}
          title="Home"
        >
          <Home size={24} />
        </button>

        <button 
          onClick={onLogos}
          className={`p-3 rounded-xl transition-colors active:scale-95 ${false ? 'bg-primary text-white' : 'hover:bg-gray-200/50 text-gray-700'}`}
          title="Government Services"
        >
          <Layers size={24} />
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <button 
          onClick={onOpenSettings}
          className="p-3 rounded-xl hover:bg-gray-200/50 transition-colors text-gray-700 active:scale-95"
          title="Settings"
        >
          <Settings size={24} />
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <button 
          onClick={onNext}
          className="p-3 rounded-xl hover:bg-gray-200/50 transition-colors text-gray-700 active:scale-95"
          title="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
        
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};