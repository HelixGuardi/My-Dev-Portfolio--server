"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../config/env");
const connectDB = async () => {
    try {
        const mongoURI = env_1.env.MONGODB_URI;
        await mongoose_1.default.connect(mongoURI);
        console.log('✅Connected to MongoDB');
    }
    catch (error) {
        console.error('❌Error connecting to MongoDB:', error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
// Handle connect event errors
mongoose_1.default.connection.on('disconnected', () => {
    console.error('❌MongoDB disconnected');
});
mongoose_1.default.connection.on('error', (error) => {
    console.error('❌MongoDB connection error: ', error);
});
//# sourceMappingURL=database.js.map