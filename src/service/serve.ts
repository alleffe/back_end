import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"], // Caminho para as rotas
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
