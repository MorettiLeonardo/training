export type CreateUserServicePayload = {
    name: string;
    email: string;
    password: string;
};

export interface FindAllServiceResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export type FindOneUserServiceParams = {
    id: string;
};

export interface FindOneUserServiceResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export type UpdateUserServiceParams = {
    id: string;
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
};

export interface UpdateUserServiceResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export type DeleteUserServiceParams = {
    id: string;
};
