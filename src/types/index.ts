export type ServiceCategory = 'graphic-design' | 'document-services';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  categoryLabel: string;
  iconName: string;
}

export type PortfolioCategory =
  | 'All Projects'
  | 'Flyers'
  | 'Posters'
  | 'Logos & Branding'
  | 'Social Media'
  | 'Documents';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Flyers' | 'Posters' | 'Logos & Branding' | 'Social Media' | 'Documents';
  tags: string[];
  description: string;
  tools: string[];
  isSampleProject: boolean;
  accentColor: string;
  badgeSubtitle?: string;
  imageUrl?: string;
  pdfUrl?: string;
  pdfPages?: string[];
  visualMockupType?:
    | 'techno-flyer'
    | 'cyber-poster'
    | 'zenith-branding'
    | 'pulse-social'
    | 'corporate-document'
    | 'pitch-deck'
    | 'luxury-card'
    | 'summit-flyer';
}

export interface SkillItem {
  name: string;
  category: 'Design & Visual Branding' | 'Document & Productivity Suite';
  percentage: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  content: string;
  projectType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  description: string;
}
