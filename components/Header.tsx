import React from 'react';
import { CompanySettings } from '../types';
import { Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  settings: CompanySettings;
}

export const Header: React.FC<HeaderProps> = ({ settings }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo & English Name */}
        <div className="flex items-center gap-4">
          {settings.logoUrl ? (
             <img src={settings.logoUrl} alt="Logo" className="h-14 w-auto object-contain" />
          ) : (
            <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              E
            </div>
          )}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">{settings.companyNameEn}</h1>
            <span className="text-sm font-arabic text-primary font-bold">{settings.companyNameAr}</span>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="p-2 bg-green-100 rounded-full text-green-600">
                <Phone size={20} />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs uppercase text-gray-500 font-semibold">Mobile</span>
              <span className="font-bold">{settings.mobile}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="p-2 bg-green-100 rounded-full text-green-600">
                <MessageCircle size={20} />
            </div>
            <div className="flex flex-col items-end">
               <span className="text-xs uppercase text-gray-500 font-semibold">WhatsApp</span>
               <span className="font-bold">{settings.whatsapp}</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};