import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";

import "./shared/container";

import { router } from "./routes";

import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

const port = {
  port: 3333,
  host: "0.0.0.0",
};

app.listen(port, () => console.log(`Server is running - ${port.port}`));
