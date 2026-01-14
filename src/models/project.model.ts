import mongoose, { Schema } from 'mongoose';
import { IProject } from '../types/types';

const projectSchema = new Schema(
  {
    id: String,
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
    },
    technologies: {
      type: [String],
      required: true,
    },
    categories: {
      type: [String],
      required: true
    },
    tags: {
      type: [String],
      required: true
    },
    /* imges: {
      type: Image[], ---> submodel ---> schema
      required: true
    } */
    links: {
      repo: String,
      demo: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['draft', 'published', 'archived'],
    },
    featured: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },

  { timestamps: true }

);

export default mongoose.model<IProject>('Project', projectSchema);

