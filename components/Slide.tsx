import React from 'react';
import { CompanySettings, ServiceItem, SlideData } from '../types';
import { MapPin, ArrowRight, CheckCircle2, FileText, CreditCard, HeartPulse, Plane, Car, Building2 } from 'lucide-react';
import { SERVICES } from '../constants';

interface SlideProps {
  data: SlideData;
  settings: CompanySettings;
  isActive: boolean;
}

const getServiceIcon = (id: string) => {
  const iconClass = "w-12 h-12 text-primary";
  switch (id) {
    case 's1': return <FileText className={iconClass} />; // Visa Services
    case 's2': return <CreditCard className={iconClass} />; // Emirates ID
    case 's3': return <HeartPulse className={iconClass} />; // Medical Insurance
    case 's4': return <Plane className={iconClass} />; // Flight Tickets
    case 's5': return <Car className={iconClass} />; // Traffic Fines
    case 's6': return <Building2 className={iconClass} />; // Tasheel & Tawjeeh
    default: return <FileText className={iconClass} />;
  }
};

export const Slide: React.FC<SlideProps> = ({ data, settings, isActive }) => {
  if (!isActive) return null;

  // --- HOME SLIDE ---
  if (data.type === 'home') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary opacity-90 z-10" />
        <img 
            src="https://picsum.photos/id/1/1920/1080" 
            alt="Office" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 animate-fade-in-up">
          <div className="inline-block px-4 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium tracking-wider uppercase">Your Trusted Partner in UAE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            {settings.companyNameEn}
          </h1>
          <h2 className="text-4xl md:text-6xl font-arabic font-bold mb-8 text-white/90 drop-shadow-md">
            {settings.companyNameAr}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
             <div className="glass-panel px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform">
                <MapPin className="text-yellow-400 w-8 h-8" />
                <div className="text-left">
                    <p className="text-xs text-gray-200 uppercase tracking-widest">Visit Us At</p>
                    <p className="font-bold text-lg leading-tight">{settings.location}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SERVICE SLIDE ---
  if (data.type === 'service' && data.serviceId) {
    const service = SERVICES.find(s => s.id === data.serviceId);
    if (!service) return null;

    return (
      <div className="relative w-full h-full flex overflow-hidden bg-white">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-12 z-20 bg-white">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-6">
                 <div className="h-1 w-12 bg-primary rounded-full"></div>
                 <span className="text-primary font-bold tracking-widest uppercase">Our Services</span>
             </div>
             
             <div className="flex items-center gap-4 mb-2">
                {getServiceIcon(service.id)}
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                    {service.titleEn}
                </h2>
             </div>
             
             <h3 className="text-4xl font-arabic font-bold text-primary mb-8 pl-16">
                {service.titleAr}
             </h3>

             <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-gray-100 pl-6">
                {service.descriptionEn}
             </p>

             <ul className="space-y-4">
                {[1,2,3].map((_, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="text-green-500 w-6 h-6" />
                        <span className="font-medium">Professional & Fast Processing</span>
                    </li>
                ))}
             </ul>

             <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2 text-primary font-bold">
                    <span>Inquire Now</span>
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="absolute md:relative inset-0 md:w-1/2 h-full z-10">
           <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
           <img 
             src={service.imageUrl} 
             alt={service.titleEn} 
             className="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear hover:scale-110" 
           />
           {/* Mobile overlay for text readability if stacked */}
           <div className="absolute inset-0 bg-white/90 md:hidden"></div>
        </div>
      </div>
    );
  }

  // --- GOV LOGOS SLIDE ---
  if (data.type === 'logos') {
    return (
       <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-50 p-12">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Government Services</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">We facilitate all major Abu Dhabi government transactions with speed and accuracy.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
              {['ICA / GDRFA', 'Tasheel', 'Tawjeeh', 'DED', 'Tadbeer', 'Amer', 'Health', 'Traffic'].map((name, idx) => (
                  <div key={idx} className="aspect-square bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                      <div className="w-20 h-20 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <span className="text-3xl font-bold">{name.charAt(0)}</span>
                      </div>
                      <span className="text-xl font-bold text-gray-800 text-center">{name}</span>
                  </div>
              ))}
          </div>
       </div>
    );
  }

  // --- CONTACT SLIDE ---
  if (data.type === 'contact') {
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-white p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-primary p-12 text-white flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
                    <div className="space-y-8">
                        <div>
                            <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Visit Us</p>
                            <p className="text-xl font-semibold">{settings.location}</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Call Us</p>
                            <p className="text-3xl font-bold">{settings.mobile}</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm uppercase tracking-wider mb-1">WhatsApp</p>
                            <p className="text-3xl font-bold">{settings.whatsapp}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 relative">
                     {/* Placeholder for map */}
                     <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                        <div className="text-center">
                            <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                            <p>Map View Area</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      );
  }

  return null;
};