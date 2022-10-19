import { z } from "zod";

const UserSchema = z.object({
    ID: z.string().uuid(),
    Nombre: z.string().trim().min(1, { message: "El nombre no puede estar vacío" }),
    Apellido: z.string().trim().min(1, { message: "El apellido no puede estar vacío" }),
    DNI: z
        .number({
            required_error: "DNI no puede estar vacío",
            invalid_type_error: "El DNI no es válido",
        })
        .positive()
        .lte(99_999_999, { message: "El DNI no es válido" }),
});

export default UserSchema;
