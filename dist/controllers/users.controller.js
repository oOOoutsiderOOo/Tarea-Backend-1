"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const user_schema_1 = __importDefault(require("../schemas/user.schema"));
const index_1 = require("../index");
const uuid_1 = require("uuid");
const getUsers = (req, res) => {
    const nombre = req.query.nombre || null;
    const apellido = req.query.apellido || null;
    let tempDB = index_1.db;
    nombre && (tempDB = index_1.db.filter(user => user.Nombre === nombre));
    apellido && (tempDB = tempDB.filter(user => user.Apellido === apellido));
    tempDB[0] ? res.send(tempDB) : res.status(404).send("Usuario no encontrado");
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const userIndex = index_1.db.findIndex(user => user.ID === req.params.userID);
    if (userIndex === -1) {
        res.status(404).send("Usuario no encontrado");
    }
    else {
        res.send(index_1.db[userIndex]);
    }
};
exports.getUser = getUser;
const addUser = (req, res) => {
    const { nombre, apellido, dni } = req.body;
    const newUser = {
        ID: (0, uuid_1.v4)(),
        Nombre: nombre,
        Apellido: apellido,
        DNI: dni,
    };
    try {
        user_schema_1.default.parse(newUser);
        index_1.db.push(newUser);
        res.status(201).send("Usuario agregado");
    }
    catch (err) {
        //console.warn(err);
        res.status(400).send(err.issues);
    }
};
exports.addUser = addUser;
const editUser = (req, res) => {
    const userIndex = index_1.db.findIndex(user => user.ID === req.params.userID);
    if (userIndex === -1) {
        res.status(404).send("Usuario no encontrado");
    }
    else {
        if (req.body.ID) {
            res.status(403).send("Intentando cambiar el id eh?");
        }
        else {
            const updatedUser = Object.assign(Object.assign({}, index_1.db[userIndex]), req.body);
            console.log(updatedUser);
            index_1.db.splice(userIndex, 1, updatedUser);
            res.send("Usuario editado satisfactoriamente");
        }
    }
};
exports.editUser = editUser;
const deleteUser = (req, res) => {
    const userIndex = index_1.db.findIndex(user => user.ID === req.params.userID);
    if (userIndex === -1) {
        res.status(404).send("Usuario no encontrado");
    }
    else {
        index_1.db.splice(userIndex, 1);
        res.send("Usuario eliminado");
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map