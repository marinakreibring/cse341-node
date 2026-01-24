const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'User API',
        description: 'API for managing users'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https']
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);

