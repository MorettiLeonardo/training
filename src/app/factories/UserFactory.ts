import { UserController } from "../controller/UserController"
import { UserService } from "../service/UserService"
import { UserRepository } from "../repository/UserRepository"
import { UserSchema } from "../schemas/UserSchema"
import { UserMiddleware } from "../middleware/UserMiddleware"

export class UserFactory {
    static createInstance() {
        const user_repository = new UserRepository()
        const middleware = new UserMiddleware(user_repository)
        const user_schema = new UserSchema()
        const user_service = new UserService(user_repository)
        const controller = new UserController(user_service, user_schema)

        return { middleware, user_schema, controller, user_repository, user_service }
    }
}
