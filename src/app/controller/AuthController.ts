import type { Request, Response, NextFunction } from "express";

import { AuthService } from "../service/AuthService";
import { AuthSchema } from "../schemas/AuthSchema";

export class AuthController {
    private authService: AuthService
    private authSchema: AuthSchema

    constructor(
        authService: AuthService,
        authSchema: AuthSchema
    ) {
        this.authService = authService
        this.authSchema = authSchema
    }

    login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        console.log('AuthController [login] - init')
        try {
            const parsedData = this.authSchema.loginSchema().parse(req.body)
            const result = await this.authService.login(parsedData)
            res.status(200).send(result)
        } catch (error) {
            console.log('AuthController [login] - error', error)
            next(error)
        } finally {
            console.log('AuthController [login] - finish')
        }
    }
}
