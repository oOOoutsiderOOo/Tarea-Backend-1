"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFibonacciNumbers = exports.getFibonacciDefault = void 0;
const generateFibonacciNumbers = (amount) => {
    const result = [0, 1];
    for (let i = 2; i < amount; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
};
const getFibonacciDefault = (req, res) => {
    res.send("hola fibo");
};
exports.getFibonacciDefault = getFibonacciDefault;
const getFibonacciNumbers = (req, res) => {
    !req.body.amount
        ? res.send(generateFibonacciNumbers(20))
        : typeof req.body.amount !== "number"
            ? res.send("That's not a número, amigue")
            : res.send(generateFibonacciNumbers(req.body.amount));
};
exports.getFibonacciNumbers = getFibonacciNumbers;
//# sourceMappingURL=fibonacci.controller.js.map