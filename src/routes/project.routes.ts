import express, { type Router, type Request, type Response, type NextFunction } from "express";
import { type Model } from "mongoose";
import ProjectModel from "../models/project.model";
import { type IProject } from "../types/types";
const router: Router = express.Router();

// Typed Model of Project
const Project: Model<IProject> = ProjectModel;

// POST /api/projects/create --> Create a new project
router.post("/create", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log("Request body here: ", req.body);
    await Project.create({
      title: req.body.title,
      slug: req.body.slug,
      shortDescription: req.body.shortDescription,
      content: req.body.content,
      technologies: req.body.technologies,
      categories: req.body.categories,
      tags: req.body.tags,
      /* images: req.body.images, */
      links: req.body.links,
      status: req.body.status,
      featured: req.body.featured,
    })
    
    res.sendStatus(201);

  } catch (error) {
    next(error);
  }
})

// GET /api/projects/all --> Get all projects

// GET /api/projects/id --> Get a specific project by id

// PATCH /api/projects/id --> Update a specific project by id

// DELETE /api/projects/id --> Delete a specific project by id

export default router;