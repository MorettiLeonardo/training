import * as bcrypt from "bcrypt";

import { UserRepository } from "../repository/UserRepository";

import * as T from "../types/service/index";

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository = new UserRepository()) {
        this.userRepository = userRepository;
    }

    create = async (payload: T.CreateUserServicePayload) => {
        console.log("UserService [create] - init");
        try {
            const hashedPassword = await bcrypt.hash(payload.password, 10);

            const createUserPayload = {
                ...payload,
                password: hashedPassword,
            };

            const user = await this.userRepository.create(createUserPayload);

            return user;
        } catch (error) {
            console.log("UserService [create] - error", error);
            console.log(error);
        } finally {
            console.log("UserService [create] - finish");
        }
    };

    findAll = async () => {
        console.log("UserService [findAll] - init");
        try {
            const users = await this.userRepository.findAll();
            return users;
        } catch (error) {
            console.log("UserService [findAll] - error", error);
            console.log(error);
        } finally {
            console.log("UserService [findAll] - finish");
        }
    };

    findOne = async (params: T.FindOneUserServiceParams) => {
        console.log("UserService [findOne] - init");
        try {
            const { id } = params;

            if (!id) {
                throw new Error("Invalid id");
            }

            const user = await this.userRepository.findOne(params);

            if (!user) {
                throw new Error("User not found");
            }

            return user;
        } catch (error) {
            console.log("UserService [findOne] - error", error);
            console.log(error);
        } finally {
            console.log("UserService [findOne] - finish");
        }
    };

    update = async (params: T.UpdateUserServiceParams) => {
        console.log("UserService [update] - init");
        try {
            const { id, ...rest } = params;

            if (!id) {
                throw new Error("Invalid id");
            }

            const user = await this.userRepository.update(params);

            if (!user) {
                throw new Error("User not found");
            }

            return user;
        } catch (error) {
            console.log("UserService [update] - error", error);
            console.log(error);
        } finally {
            console.log("UserService [update] - finish");
        }
    };

    delete = async (params: T.DeleteUserServiceParams) => {
        console.log("UserService [delete] - init");
        try {
            const { id } = params;

            if (!id) {
                throw new Error("Invalid id");
            }

            const result = await this.userRepository.delete(params);

            if (!result) {
                throw new Error("Failed to delete user");
            }

            return result;
        } catch (error) {
            console.log("UserService [delete] - error", error);
            console.log(error);
        } finally {
            console.log("UserService [delete] - finish");
        }
    };
}
