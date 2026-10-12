export interface CreateUserRepositoryParams {
    name: string;
    email: string;
    password: string;
}

export interface CreateUserRepositoryResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface FindAllRepositoryResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface FindOneUserRepositoryParams {
    id: string;
}

export interface FindOneUserRepositoryResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface FindByEmailUserRepositoryParams {
    email: string;
}

export interface FindByEmailUserRepositoryResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdateUserRepositoryParams {
    id: string;
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}

export interface UpdateUserRepositoryResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export type DeleteUserRepositoryParams = {
    id: string;
};

export type DeleteUserRepositoryResponse = {
    success: boolean;
};
