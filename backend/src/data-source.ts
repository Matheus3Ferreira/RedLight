import "reflect-metadata";
import { DataSource } from "typeorm";
import { Guest } from "./entity/Guest";
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
    migrationsTableName: "guest",
})

