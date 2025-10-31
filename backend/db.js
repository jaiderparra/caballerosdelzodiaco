// backend/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI;
if (!uri) throw new Error('mongodb+srv://jaider:contraseña@caballerosdelzodiaco.ievicxy.mongodb.net/?appName=caballerosdelzodiaco');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => { console.error('❌ Error DB:', err); process.exit(1); });

 
  //contraseña mongodb = contraseña
  // usuario mongodb = jaider
  //conexion SRV = mongodb+srv://jaider:contraseña@caballerosdelzodiaco.ievicxy.mongodb.net/?appName=caballerosdelzodiaco