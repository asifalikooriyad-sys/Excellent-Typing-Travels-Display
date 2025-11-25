import { CompanySettings, ServiceItem } from './types';

export const DEFAULT_SETTINGS: CompanySettings = {
  companyNameEn: "EXCELLENT TYPING & TRAVELS",
  companyNameAr: "أكسلنت للطباعة والسفريات",
  mobile: "+971 52 134 4487",
  whatsapp: "02 886 8690",
  location: "Musaffah Shabiya M-11, Near Crispy Chicken, Abu Dhabi",
  logoUrl: "", // Empty string means use text fallback
  themeColor: "#0066CC", // A nice professional blue
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    titleEn: 'Visa Services',
    titleAr: 'خدمات التأشيرات',
    descriptionEn: 'Family Visa, Visit Visa, Employment Visa, Golden Visa processing.',
    imageUrl: 'https://picsum.photos/id/1031/1920/1080',
  },
  {
    id: 's2',
    titleEn: 'Emirates ID Typing',
    titleAr: 'طباعة الهوية الإماراتية',
    descriptionEn: 'New application, Renewal, and Updates for Emirates ID.',
    imageUrl: 'https://picsum.photos/id/1/1920/1080',
  },
  {
    id: 's3',
    titleEn: 'Medical Insurance',
    titleAr: 'تأمين صحي',
    descriptionEn: 'Health insurance for family, employees, and visitors (Daman, etc).',
    imageUrl: 'https://picsum.photos/id/1059/1920/1080',
  },
  {
    id: 's4',
    titleEn: 'Flight Tickets & Travels',
    titleAr: 'تذاكر الطيران والسفريات',
    descriptionEn: 'Best rates for worldwide flight tickets and holiday packages.',
    imageUrl: 'https://picsum.photos/id/1047/1920/1080',
  },
  {
    id: 's5',
    titleEn: 'Traffic Fines & Services',
    titleAr: 'خدمات المرور والمخالفات',
    descriptionEn: 'Traffic file opening, fine payment, vehicle registration renewal.',
    imageUrl: 'https://picsum.photos/id/1070/1920/1080',
  },
  {
    id: 's6',
    titleEn: 'Tasheel & Tawjeeh',
    titleAr: 'تسهيل وتوجيه',
    descriptionEn: 'Ministry of Human Resources & Emiratisation services.',
    imageUrl: 'https://picsum.photos/id/1076/1920/1080',
  },
];
