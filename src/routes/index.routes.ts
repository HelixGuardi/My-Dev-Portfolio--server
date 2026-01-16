import { Router, type Request, type Response } from "express";
const router: Router = Router();

import projectsRouter from "./project.routes";

// Health Check Route
router.get("/health", (_req: Request, res: Response): void => {
  console.log("¡All good in here baby! Our server is healthy and running smoothly");
  res.json({
    sucess: true,
    message: 'Server is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// API ROUTES
router.use("/projects", projectsRouter);

export default router;