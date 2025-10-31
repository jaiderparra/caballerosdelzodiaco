// backend/routes/caballeros.js
import express from "express";
import Caballero from "../models/caballero.js";
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Caballero:
 *       type: object
 *       required:
 *         - nombre
 *         - constelacion
 *         - imagen
 *         - descripcion
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del caballero del zodiaco
 *         constelacion:
 *           type: string
 *           description: Constelación del caballero
 *         imagen:
 *           type: string
 *           description: URL de la imagen del caballero
 *         descripcion:
 *           type: string
 *           description: Descripción del caballero
 *       example:
 *         nombre: Seiya
 *         constelacion: Pegaso
 *         imagen: "https://cdn.example.com/seiya.jpg"
 *         descripcion: Caballero de Bronce con armadura de Pegaso...
 */

/**
 * @swagger
 * /api/caballeros/{nombre}:
 *   get:
 *     summary: Obtiene un caballero del zodiaco por su nombre
 *     tags: [Caballeros]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del caballero a buscar
 *     responses:
 *       200:
 *         description: Caballero encontrado
 *       404:
 *         description: Caballero no encontrado
 */
router.get("/:nombre", async (req, res) => {
  try {
    const caballero = await Caballero.findOne({ nombre: req.params.nombre });
    if (!caballero) return res.status(404).json({ message: "Caballero no encontrado" });
    res.json(caballero);
  } catch (error) {
    res.status(500).json({ message: "Error del servidor" });
  }
});

export default router;
