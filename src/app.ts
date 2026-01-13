import express, { type Express } from "express";
import { corsMiddleware } from "./middlewares/cors";
import { morganMiddleware } from "./middlewares/morgan";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import routes from "./routes/index.routes";

// Create an instance of Express
const app: Express = express();

// Middleware for parsing JSON in requests
app.use(express.json());
// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use(corsMiddleware);
app.use(morganMiddleware);

// App Routes
app.use("/api", routes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;