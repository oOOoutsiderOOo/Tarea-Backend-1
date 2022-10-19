import { Express } from "express";
import { addUser, deleteUser, editUser, getFibonacciDefault, getFibonacciNumbers, getUsers } from "./controllers";

export function routes(app: Express) {
    app.get("/fib", getFibonacciDefault);
    app.post("/fib", getFibonacciNumbers);

    app.get("/API", getUsers);
    app.post("/API", addUser);
    app.patch("/API", editUser);
    app.delete("/API", deleteUser);
}
