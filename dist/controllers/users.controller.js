"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.addUser = exports.getUsers = void 0;
const user_schema_1 = __importDefault(require("../schemas/user.schema"));
const index_1 = require("../index");
const uuid_1 = require("uuid");
const getUsers = (req, res) => {
    res.send(index_1.db);
};
exports.getUsers = getUsers;
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
        res.send("Usuario agregado");
    }
    catch (err) {
        //console.warn(err);
        res.statusCode = 400;
        res.send(err.issues);
    }
};
exports.addUser = addUser;
const editUser = (req, res) => {
    res.send("hola edit");
};
exports.editUser = editUser;
const deleteUser = (req, res) => {
    res.send("hola delete");
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map