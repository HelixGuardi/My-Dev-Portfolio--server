"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const database_1 = require("./config/database");
const startServer = async () => {
    try {
        // Connect to MongoDB
        await (0, database_1.connectDB)();
        // Start the server
        app_1.default.listen(env_1.env.PORT, () => {
            console.log(`🚀Server is running on http://localhost:${env_1.env.PORT}`);
            console.log(`📝Enviroment: ${env_1.env.nodeEnv}`);
        });
    }
    catch (error) {
        console.error('❌Error starting the server:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map