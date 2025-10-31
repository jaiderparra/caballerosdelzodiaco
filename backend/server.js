// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import caballerosRoutes from "./routes/caballeros.js";
import "./db.js"; // aquí ya se ejecuta la conexión a MongoDB
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "./openapi.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Documentación Swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

// Rutas principales
app.use("/api/caballeros", caballerosRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
