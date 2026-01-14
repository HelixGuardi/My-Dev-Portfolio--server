/* INTERFACES */
import { Document } from 'mongoose';
export interface IProject extends Document { //Project Model Interface
  id: string;
  title: string;
  slug: string,
  shortDescription: string,
  content: string,
  technologies: string[],
  categories: string[],
  tags: string[],
  images: Image[],
  links: {
    repo?: string,
    demo?: string
  },
  status: 'draft' | 'published' | 'archived',
  featured: boolean,
  createdAt: Date,
  updatedAt: Date
}