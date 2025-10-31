// backend/seed.js
import './db.js';
import Caballero from './models/caballero.js';

const items = [
  {
    nombre: 'Seiya',
    constelacion: 'Pegaso',
    imagen: 'https://static.wikia.nocookie.net/saintseiya/images/e/e1/Seiya_de_Pegaso.png',
    descripcion: 'Caballero de Bronce con armadura de Pegaso...'
  },
  {
    nombre: 'Shiryu',
    constelacion: 'Dragón',
    imagen: 'https://static.wikia.nocookie.net/saintseiya/images/0/04/Drag%C3%B3n_Shiryuu.png/revision/latest/scale-to-width/360?cb=20171015140247&path-prefix=es',
    descripcion: 'Caballero de Bronce con la fuerza del Dragón, maestro del puño sagrado.'
  }
];

async function seed() {
  try {
    await Caballero.deleteMany({});
    await Caballero.insertMany(items);
    console.log('✅ Seed completo');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
seed();
