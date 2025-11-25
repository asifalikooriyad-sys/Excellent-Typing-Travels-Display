export interface CompanySettings {
  companyNameEn: string;
  companyNameAr: string;
  mobile: string;
  whatsapp: string;
  location: string;
  logoUrl: string; // URL or base64
  themeColor: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  imageUrl: string;
}

export interface SlideData {
  type: 'home' | 'service' | 'logos' | 'contact';
  serviceId?: string;
}
