import { Request, Response } from "express";
import UserSchema from "../schemas/user.schema";
import { db } from "../index";
import { v4 as uuidv4 } from "uuid";

export const getUsers = (req: Request, res: Response) => {
    const nombre = req.query.nombre || null;
    const apellido = req.query.apellido || null;

    let tempDB = db;
    nombre && (tempDB = db.filter(user => user.Nombre === nombre));
    apellido && (tempDB = tempDB.filter(user => user.Apellido === apellido));

    tempDB[0] ? res.send(tempDB) : res.status(404).send("Usuario no encontrado");
};
export const getUser = (req: Request, res: Response) => {
    const userIndex = db.findIndex(user => user.ID === req.params.userID);
    if (userIndex === -1) {
        res.status(404).send("Usuario no encontrado");
    } else {
        res.send(db[userIndex]);
    }
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
        res.status(201).send("Usuario agregado");
    } catch (err: any) {
        //console.warn(err);
        res.status(400).send(err.issues);
    }
};

export const editUser = (req: Request, res: Response) => {
    const userIndex = db.findIndex(user => user.ID === req.params.userID);
    if (userIndex === -1) {
        res.status(404).send("Usuario no encontrado");
    } else {
        if (req.body.ID) {
            res.status(403).send("Intentando cambiar el id eh?");
        } else {
            const updatedUser = {
                ...db[userIndex],
                ...req.body,
            };
            console.log(updatedUser);
            db.splice(userIndex, 1, updatedUser);
            res.send("Usuario editado satisfactoriamente");
        }
    }
};

export const deleteUser = (req: Request, res: Response) => {
    const userIndex = db.findIndex(user => user.ID === req.params.userID);
    if (userIndex === -1) {
        res.status(404).send("Usuario no encontrado");
    } else {
        db.splice(userIndex, 1);
        res.send("Usuario eliminado");
    }
};
