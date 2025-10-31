// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import caballerosRoutes from './routes/caballeros.js';
import './db.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './openapi.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const specs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/caballeros', caballerosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
