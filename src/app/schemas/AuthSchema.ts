import * as z from "zod";

export class AuthSchema {
    loginSchema() {
        return z.object({
            email: z.string().email(),
            password: z.string().min(6),
        });
    }
}
