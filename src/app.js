const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const apiRoutes = require('./routes/api');
require ('dotenv').config();

const app = express();

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Your API routes go here

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
});