import { AuthService } from "../service/AuthService"
import { AuthController } from "../controller/AuthController"
import { UserRepository } from "../repository/UserRepository"
import { AuthSchema } from "../schemas/AuthSchema"

export class AuthFactory {
    static createInstance() {
        const auth_repository = new UserRepository()
        const auth_schema = new AuthSchema()
        const auth_service = new AuthService(auth_repository)
        const controller = new AuthController(auth_service, auth_schema)

        return { auth_schema, controller, auth_repository, auth_service }
    }
}
