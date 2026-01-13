import { type Request, type Response, type NextFunction } from "express";
export interface CustomError extends Error {
    statusCode?: number;
}
export declare const errorHandler: (err: CustomError, _req: Request, res: Response, _next: NextFunction) => void;
//# sourceMappingURL=errorHandler.d.ts.map