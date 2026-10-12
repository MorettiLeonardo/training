import type { NextFunction, Request, Response } from "express";

import { UserService } from "../service/UserService";
import { UserSchema } from "../schemas/UserSchema";

export class UserController {
    private userService: UserService;
    private userSchema: UserSchema;

    constructor(userService: UserService, userSchema: UserSchema) {
        this.userService = userService;
        this.userSchema = userSchema;
    }

    create = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        console.log("UserController started");
        try {
            const parsedData = this.userSchema.createSchema().parse(req.body);

            const result = await this.userService.create(parsedData);
            res.status(201).send(result);
        } catch (error) {
            console.log(`UserController error: ${error}`);
            next(error);
        } finally {
            console.log("UserController fished");
        }
    };

    findAll = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        console.log("UserController started");
        try {
            const result = await this.userService.findAll();
            res.status(200).send(result);
        } catch (error) {
            console.log(`UserController error: ${error}`);
            next(error);
        } finally {
            console.log("UserController fished");
        }
    };

    findOne = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        console.log("UserController [findOne] - init");
        try {
            const { id } = req.params;
            const result = await this.userService.findOne({ id: String(id) });
            res.status(200).send(result);
        } catch (error) {
            console.log("UserController [findOne] - error", error);
            next(error);
        } finally {
            console.log("UserController [findOne] - finish");
        }
    };

    update = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        console.log("UserController [update] - init");
        try {
            const { id } = req.params;

            const parsedData = this.userSchema.updateSchema().parse(req.body);

            const result = await this.userService.update({
                id: String(id),
                ...parsedData,
            });
            res.status(200).send(result);
        } catch (error) {
            console.log("UserController [update] - error", error);
            next(error);
        } finally {
            console.log("UserController [update] - finish");
        }
    };

    delete = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        console.log("UserController [delete] - init");
        try {
            const { id } = req.params;
            const result = await this.userService.delete({ id: String(id) });
            res.status(200).send(result);
        } catch (error) {
            console.log("UserController [delete] - error", error);
            next(error);
        } finally {
            console.log("UserController [delete] - finish");
        }
    };
}
