"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const controllers_1 = require("./controllers");
function routes(app) {
    //app.get("/fib", getFibonacciDefault);
    app.post("/fib", controllers_1.getFibonacciNumbers);
    app.get("/API/users", controllers_1.getUsers);
    app.get("/API/users/:userID", controllers_1.getUser);
    app.post("/API/users", controllers_1.addUser);
    app.put("/API/users/:userID", controllers_1.editUser);
    app.delete("/API/users/:userID", controllers_1.deleteUser);
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map