export type ThemeMode = 'light' | 'dark';

export type SectionId = 'hero' | 'timeline' | 'skills' | 'projects' | 'contacts';

export interface TimelineItem {
  id: string;
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  type: 'education' | 'pcto' | 'leadership';
  description: string;
  keySkills: string[];
  achievements: string[];
  coursework?: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: 'Avanzato' | 'Competente' | 'Base';
  icon?: string;
  description?: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  badgeCount: number;
  skills: SkillItem[];
  accentGradient: string;
  gridSpan: string; // Tailwind grid span for bento layout
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  created_at: string;
  topics?: string[];
  open_issues_count?: number;
  homepage?: string | null;
  size?: number;
  default_branch?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
