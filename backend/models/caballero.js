/**
 * @swagger
 * tags:
 *   name: Caballeros
 *   description: API para gestionar Caballeros del Zodiaco
 */


import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  nombre: { type: String, required: true },
  constelacion: String,
  imagen: String,
  descripcion: String
});
export default mongoose.model('Caballero', schema);
