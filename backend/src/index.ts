import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.listen(3333, () => {
    console.log("http://localhost:3333/api/");
})