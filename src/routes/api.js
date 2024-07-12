const express = require('express');
const router = express.Router();

/* @swagger
* /api/test:
* get:
* summary: Get a resource
* description: Get a specific resource by ID.
* parameters:
* — in: path
* name: id
* required: true
* description: ID of the resource to retrieve.
* schema:
* type: string
* responses:
* 200:
* description: Successful response
*/
router.get('/test', (req, res) => {
    // Your route logic goes here
});

module.exports = router;