export interface LoginServiceParams {
    email: string
    password: string
}

export interface LoginServiceResponse {
    token: string
}