// backend/openapi.js
export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'API Caballeros', version: '1.0.0', description: 'Microservicio Caballeros del Zodiaco' },
    servers: [{ url: process.env.BASE_URL || 'http://localhost:5000' }]
  },
  apis: ['./routes/*.js', './models/*.js'] // si quieres usar JSDoc comments
};
