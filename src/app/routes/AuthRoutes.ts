import { Router } from "express";

import { AuthFactory } from "../factories/AuthFactory";

const router = Router();
const { controller } = AuthFactory.createInstance();

router.post("/", controller.login);

export { router as authRouter };
