"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const initialData_1 = require("./initialData");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 5000;
exports.db = initialData_1.initialData;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.status(200).send();
});
app.listen(port, () => console.log(`Stones rolling on port ${port}`));
(0, routes_1.routes)(app);
//# sourceMappingURL=index.js.map