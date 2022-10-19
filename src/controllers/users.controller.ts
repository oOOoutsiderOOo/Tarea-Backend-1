import { Request, Response } from "express";
import UserSchema from "../schemas/user.schema";
import { db } from "../index";
import { v4 as uuidv4 } from "uuid";

export const getUsers = (req: Request, res: Response) => {
    res.send(db);
};

export const addUser = (req: Request, res: Response) => {
    const { nombre, apellido, dni } = req.body;
    const newUser = {
        ID: uuidv4(),
        Nombre: nombre,
        Apellido: apellido,
        DNI: dni,
    };
    try {
        UserSchema.parse(newUser);
        db.push(newUser);
        res.send("Usuario agregado");
    } catch (err: any) {
        //console.warn(err);
        res.statusCode = 400;
        res.send(err.issues);
    }
};

export const editUser = (req: Request, res: Response) => {
    res.send("hola edit");
};

export const deleteUser = (req: Request, res: Response) => {
    res.send("hola delete");
};
