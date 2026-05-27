export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  link?: string;
  github?: string;
  featured: boolean;
  problemSolved?: string;
  impact?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  icon?: any;
}

export interface Skill {
  category: string;
  items: string[];
  icon?: any;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
}
