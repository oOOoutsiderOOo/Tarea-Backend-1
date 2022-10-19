import { Request, Response } from "express";

const generateFibonacciNumbers = (amount: number): number[] => {
    const result = [0, 1];

    for (let i = 2; i < amount; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
};

export const getFibonacciDefault = (req: Request, res: Response) => {
    res.send("hola fibo");
};

export const getFibonacciNumbers = (req: Request, res: Response) => {
    !req.body.amount
        ? res.send(generateFibonacciNumbers(20))
        : typeof req.body.amount !== "number"
        ? res.send("That's not a número, amigue")
        : res.send(generateFibonacciNumbers(req.body.amount));
};
