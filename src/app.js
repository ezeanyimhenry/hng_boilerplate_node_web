const express = require('express');
const app = express();
require ('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
});