"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateFibonacciNumbers = (amount) => {
    const result = [0, 1];
    for (let i = 2; i < amount; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
};
exports.default = generateFibonacciNumbers;
//# sourceMappingURL=generateFibonacciNumber.js.map