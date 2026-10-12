import { QueryTypes } from "sequelize";

import { User } from "../models/User";
import { FindAllMapperSQL } from "../mapper/User/FindAllMapperSQL";
import { FindOneMapperSQL } from "../mapper/User/FindOneMapperSQL";

import * as T from "../types/repository/index";

export class UserRepository {
    create = async (
        params: T.CreateUserRepositoryParams,
    ): Promise<T.CreateUserRepositoryResponse> => {
        console.log("UserRepository [create] - init");
        try {
            const { name, email, password } = params;

            const result = await User.create({
                name,
                email,
                password,
            });

            if (!result) {
                throw new Error("Failed to create user");
            }

            return result.dataValues;
        } catch (error) {
            console.log("UserRepository [create] - init");
            throw error;
        } finally {
            console.log("UserRepository [create] - init");
        }
    };

    findAll = async (): Promise<T.FindAllRepositoryResponse[]> => {
        console.log("UserRepository [findAll] - init");
        try {
            const mapper = new FindAllMapperSQL();

            const query = mapper.getQuery();

            const result = await User.sequelize?.query(query, {
                type: QueryTypes.SELECT,
            });

            return result as unknown as T.FindAllRepositoryResponse[];
        } catch (error) {
            console.log("UserRepository [findAll] - erorr", error);
            throw error;
        } finally {
            console.log("UserRepository [findAll] - finish");
        }
    };

    findOne = async (
        params: T.FindOneUserRepositoryParams,
    ): Promise<T.FindOneUserRepositoryResponse> => {
        console.log("UserRepository [findOne] - init");
        try {
            const { id } = params;

            const mapper = new FindOneMapperSQL();

            const query = mapper.getQuery(id);

            const result = await User.sequelize?.query(query, {
                type: QueryTypes.SELECT,
                replacements: { id },
                plain: true,
            });

            return result as unknown as T.FindOneUserRepositoryResponse;
        } catch (error) {
            console.log("UserRepository [findOne] - error", error);
            throw error;
        } finally {
            console.log("UserRepository [findOne] - finish");
        }
    };

    findByEmail = async (
        params: T.FindByEmailUserRepositoryParams,
    ): Promise<T.FindByEmailUserRepositoryResponse> => {
        console.log("UserRepository [findByEmail] - init");
        try {
            const { email } = params;

            const user = await User.findOne({ where: { email } });

            return user?.dataValues;
        } catch (error) {
            console.log("UserRepository [findByEmail] - error", error);
            throw error;
        } finally {
            console.log("UserRepository [findByEmail] - finish");
        }
    };

    update = async (
        params: T.UpdateUserRepositoryParams,
    ): Promise<T.UpdateUserRepositoryResponse> => {
        console.log("UserRepository [update] - init");
        try {
            const { id, ...data } = params;

            await User.update(data, { where: { id } });

            const updatedUser = await User.findOne({ where: { id } });

            if (!updatedUser) {
                throw new Error("Failed to find updated user");
            }

            return updatedUser.dataValues;
        } catch (error) {
            console.log("UserRepository [update] - error", error);
            throw error;
        } finally {
            console.log("UserRepository [update] - finish");
        }
    };

    delete = async (
        params: T.DeleteUserRepositoryParams,
    ): Promise<T.DeleteUserRepositoryResponse> => {
        console.log("UserRepository [delete] - init");
        try {
            const { id } = params;
            await User.destroy({ where: { id } });

            return { success: true };
        } catch (error) {
            console.log("UserRepository [delete] - error", error);
            throw error;
        } finally {
            console.log("UserRepository [delete] - finish");
        }
    };
}
