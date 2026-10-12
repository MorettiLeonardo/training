import type { NextFunction, Request, Response } from "express";

import { UserRepository } from "../repository/UserRepository";

export class UserMiddleware {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    verifyEmailExist = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        console.log("UserMiddleware [verifyEmailExist] - init");
        try {
            const { email } = req.body;

            const user = await this.userRepository.findByEmail({ email });
            if (user) {
                return res.status(400).send("Email already registered");
            }

            next();
        } catch (error) {
            console.log("UserMiddleware [verifyEmailExist] - error", error);
            return res.status(500).send();
        } finally {
            console.log("UserMiddleware [verifyEmailExist] - finish");
        }
    };
}
