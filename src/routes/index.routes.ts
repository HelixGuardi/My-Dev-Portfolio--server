import { Router, type Request, type Response } from "express";
const router: Router = Router();

router.get("/health", (_req: Request, res: Response): void => {
  console.log("¡All good in here baby!");
  res.json({
    sucess: true,
    message: 'Server is running smoothly',
    timestamp: new Date().toISOString()
  });
});

export default router;