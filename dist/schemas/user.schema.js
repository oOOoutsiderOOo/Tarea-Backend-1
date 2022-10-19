"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserSchema = zod_1.z.object({
    ID: zod_1.z.string().uuid(),
    Nombre: zod_1.z.string().trim().min(1, { message: "El nombre no puede estar vacío" }),
    Apellido: zod_1.z.string().trim().min(1, { message: "El apellido no puede estar vacío" }),
    DNI: zod_1.z
        .number({
        required_error: "DNI no puede estar vacío",
        invalid_type_error: "El DNI no es válido",
    })
        .positive()
        .lte(99999999, { message: "El DNI no es válido" }),
});
exports.default = UserSchema;
//# sourceMappingURL=user.schema.js.map