import express, { type Express } from "express";
import routes from "./routes/index.routes";

// Create an instance of Express
const app: Express = express();

// Middleware for parsing JSON in requests
app.use(express.json());
// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Custom middleware

// App Routes
app.use("/api", routes);

// Error handling


export default app;