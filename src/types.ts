export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: { label: string; value: string };
  tags: string[];
}

export interface VideoPhrase {
  range: [number, number]; // [startProgress, endProgress]
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  ctaText: string;
}
