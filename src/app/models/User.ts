import { DataTypes } from "sequelize";
import { randomUUID } from "node:crypto";

import { sequelize } from "../infra/database/sequelize";

const User = sequelize.define("user", {
    id: {
        type: DataTypes.STRING,
        defaultValue: () => randomUUID(),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
});

export { User };
