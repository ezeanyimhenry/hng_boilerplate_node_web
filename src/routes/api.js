const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Get a resource
 *     description: Get a specific resource.
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/test', (req, res) => {
  res.json({ message: "Resource retrieved successfully" });
});

module.exports = router;
