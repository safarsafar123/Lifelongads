export interface Service {
  title: string;
  description: string;
  items: string[];
}

export interface Package {
  name: string;
  price?: string;
  duration?: string;
  turnaround?: string;
  deliverables: string[];
  isPopular?: boolean;
}

export interface Industry {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  image: string;
  linkedinUrl?: string;
}
