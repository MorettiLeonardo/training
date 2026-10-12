import { Router } from "express";

import { UserFactory } from "../factories/UserFactory";

const router = Router();
const { controller, middleware } = UserFactory.createInstance();

router.post("/", middleware.verifyEmailExist, controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export { router as userRouter };
