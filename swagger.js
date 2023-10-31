const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books Management API',
      version: '1.0.0',
      description: 'API documentation for your Books Management project.',
    },
  },
  apis: ['./routes/bookRoutes*.js'], // Specify the path to your route files.
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
