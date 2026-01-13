"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const env_js_1 = require("./config/env.js");
const startServer = async () => {
    try {
        app_js_1.default.listen(env_js_1.env.PORT, () => {
            console.log(`🚀Server is running on http://localhost:${env_js_1.env.PORT}`);
            console.log(`📝Enviroment: ${env_js_1.env.nodeEnv}`);
        });
    }
    catch (error) {
        console.error('❌Error starting the server:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map