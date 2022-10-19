"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const controllers_1 = require("./controllers");
function routes(app) {
    app.get("/fib", controllers_1.getFibonacciDefault);
    app.post("/fib", controllers_1.getFibonacciNumbers);
    app.get("/API", controllers_1.getUsers);
    app.post("/API", controllers_1.addUser);
    app.patch("/API", controllers_1.editUser);
    app.delete("/API", controllers_1.deleteUser);
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map