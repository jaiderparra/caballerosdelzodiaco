// backend/openapi.js
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Caballeros del Zodiaco",
      version: "1.0.0",
      description: "Microservicio que gestiona los Caballeros del Zodiaco"
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:10000",
        description: "Servidor principal"
      }
    ]
  },
  apis: ["./routes/*.js", "./models/*.js"]
};
