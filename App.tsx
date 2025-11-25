import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { NavigationDock } from './components/NavigationDock';
import { SettingsModal } from './components/SettingsModal';
import { Slide } from './components/Slide';
import { DEFAULT_SETTINGS, SERVICES } from './constants';
import { CompanySettings, SlideData } from './types';

function App() {
  const [settings, setSettings] = useState<CompanySettings>(() => {
    const saved = localStorage.getItem('appSettings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Generate the slides array
  const slides: SlideData[] = useMemo(() => {
    const slideList: SlideData[] = [
        { type: 'home' },
        ...SERVICES.map(s => ({ type: 'service' as const, serviceId: s.id })),
        { type: 'logos' },
        { type: 'contact' }
    ];
    return slideList;
  }, []);

  // Update CSS custom property when theme color changes
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', settings.themeColor);
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }, [settings]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleGoToHome = () => setCurrentSlideIndex(0);
  const handleGoToLogos = () => {
    const logoIndex = slides.findIndex(s => s.type === 'logos');
    if (logoIndex !== -1) setCurrentSlideIndex(logoIndex);
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-50 overflow-hidden font-sans">
      
      <Header settings={settings} />

      <main className="h-screen w-full pt-20">
        <div className="relative h-full w-full">
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`
                        absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform
                        ${index === currentSlideIndex 
                            ? 'opacity-100 translate-x-0 scale-100 z-10' 
                            : index < currentSlideIndex 
                                ? 'opacity-0 -translate-x-full scale-95 z-0'
                                : 'opacity-0 translate-x-full scale-95 z-0'
                        }
                    `}
                >
                    <Slide 
                        data={slide} 
                        settings={settings} 
                        isActive={index === currentSlideIndex} // optimization
                    />
                </div>
            ))}
        </div>
      </main>

      <NavigationDock 
        onNext={handleNext}
        onPrev={handlePrev}
        onHome={handleGoToHome}
        onLogos={handleGoToLogos}
        onOpenSettings={() => setIsSettingsOpen(true)}
        totalSlides={slides.length}
        currentSlide={currentSlideIndex}
      />

      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={setSettings}
      />
    </div>
  );
}

export default App;