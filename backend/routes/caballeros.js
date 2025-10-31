// backend/routes/caballeros.js
import express from 'express';
import Caballero from '../models/caballero.js';
const router = express.Router();

/**
 * GET /api/caballeros/:nombre
 * Buscar por nombre (case-insensitive)
 */
router.get('/:nombre', async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const caballero = await Caballero.findOne({ nombre: { $regex: new RegExp(`^${nombre}$`, 'i') } });
    if (!caballero) return res.status(404).json({ message: 'Caballero no encontrado' });
    res.json(caballero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
