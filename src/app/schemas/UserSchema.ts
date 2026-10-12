import { z } from "zod";

export class UserSchema {
    createSchema() {
        return z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8),
        });
    }

    updateSchema() {
        return z.object({
            name: z.string().optional(),
            email: z.string().email().optional(),
            password: z.string().min(8).optional(),
        });
    }

    findOneSchema() {
        return z.object({
            id: z.string(),
        });
    }
}
