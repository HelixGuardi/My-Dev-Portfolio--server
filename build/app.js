"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_js_1 = __importDefault(require("./routes/index.routes.js"));
// Create an instance of Express
const app = (0, express_1.default)();
// Middleware for parsing JSON in requests
app.use(express_1.default.json());
// Middleware for parsing form data
app.use(express_1.default.urlencoded({ extended: true }));
// Custom middleware
// App Routes
app.use("/api", index_routes_js_1.default);
// Error handling
exports.default = app;
//# sourceMappingURL=app.js.map