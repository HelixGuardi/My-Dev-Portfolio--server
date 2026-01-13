"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/health", (_req, res) => {
    console.log("¡All good in here baby!");
    res.json({
        sucess: true,
        message: 'Server is running smoothly',
        timestamp: new Date().toISOString()
    });
});
exports.default = router;
//# sourceMappingURL=index.routes.js.map