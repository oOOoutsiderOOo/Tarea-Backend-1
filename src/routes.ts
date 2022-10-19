import { Express } from "express";
import { addUser, deleteUser, editUser, getFibonacciDefault, getFibonacciNumbers, getUser, getUsers } from "./controllers";

export function routes(app: Express) {
    //app.get("/fib", getFibonacciDefault);
    app.post("/fib", getFibonacciNumbers);

    app.get("/API/users", getUsers);
    app.get("/API/users/:userID", getUser);
    app.post("/API/users", addUser);
    app.put("/API/users/:userID", editUser);
    app.delete("/API/users/:userID", deleteUser);
}
