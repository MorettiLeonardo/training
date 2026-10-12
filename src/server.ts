import "dotenv/config";
import express from "express";
import cors from "cors";

import { userRouter } from "./app/routes/UserRoutes";
import { authRouter } from "./app/routes/AuthRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log("API running in port 3333");
});
