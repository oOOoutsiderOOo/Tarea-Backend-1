"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFibonacciNumbers = exports.getFibonacciDefault = void 0;
const generateFibonacciNumbers = (amount) => {
    const result = [0, 1];
    for (let i = 2; i < amount; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
};
const getFibonacciDefault = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("hola fibonacci");
});
exports.getFibonacciDefault = getFibonacciDefault;
const getFibonacciNumbers = (req, res) => {
    !req.body.amount
        ? res.send(generateFibonacciNumbers(20))
        : typeof req.body.amount !== "number"
            ? res.status(400).send("That's not a número, amigue")
            : res.send(generateFibonacciNumbers(req.body.amount));
};
exports.getFibonacciNumbers = getFibonacciNumbers;
//# sourceMappingURL=fibonacci.controller.js.map