import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserRepository } from "../repository/UserRepository";

import * as T from '../types/service/AuthService'

export class AuthService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async login(params: T.LoginServiceParams): Promise<T.LoginServiceResponse> {
        console.log('AuthService [login] - init')
        try {
            const { email, password } = params;

            const user = await this.userRepository.findByEmail({email})
            if (!user) {
                throw new Error('User not found')
            }

            const isPasswordValid = await bcrypt.compare(password, user.password)

            if (!isPasswordValid) {
                throw new Error('Invalid password')
            }
            const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' })
            return { token }
        } catch (error) {
            console.log('AuthService [login] - error', error)
            throw error;
        } finally {
            console.log('AuthService [login] - finish')
        }
    }
}
