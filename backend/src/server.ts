import express from "express";
import { createSQLConnection } from "./database/mysql";
import routes from "./routes";

const app = express();

app.use(express.json());
createSQLConnection();

app.use("/api", routes);

app.listen(3333, () => {
  console.log("listening on port http://localhost:3333/api");
});
