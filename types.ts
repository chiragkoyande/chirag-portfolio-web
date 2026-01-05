import * as React from 'react';

export enum ViewState {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  RESOURCES = 'RESOURCES',
  ADMIN = 'ADMIN',
}

export interface Project {
  id: string;
  title: string;
  image?: string;
  description: string;
  tech: string[];
  securityLevel: string;
  status: 'SECURE' | 'BREACHED' | 'ANALYZING';
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  level: 'Expert' | 'Professional' | 'Associate';
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'VIDEO' | 'ARTICLE' | 'NOTE';
  url: string;
  description?: string;
  dateAdded: number;
}

export interface ShatterProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'med' | 'high';
  links?: {
    github?: string;
    demo?: string;
  };
  loading?: boolean;
}