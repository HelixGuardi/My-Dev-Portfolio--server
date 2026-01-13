import { type Request, type Response } from "express";

export const notFound = (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    message: `${req.originalUrl} not found`,
  });
}