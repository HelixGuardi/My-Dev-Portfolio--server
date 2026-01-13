"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = require("./middlewares/cors");
const morgan_1 = require("./middlewares/morgan");
const notFound_1 = require("./middlewares/notFound");
const errorHandler_1 = require("./middlewares/errorHandler");
const index_routes_1 = __importDefault(require("./routes/index.routes"));
// Create an instance of Express
const app = (0, express_1.default)();
// Middleware for parsing JSON in requests
app.use(express_1.default.json());
// Middleware for parsing form data
app.use(express_1.default.urlencoded({ extended: true }));
// Custom middleware
app.use(cors_1.corsMiddleware);
app.use(morgan_1.morganMiddleware);
// App Routes
app.use("/api", index_routes_1.default);
// Error handling
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map