const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/jopak:
 *   get:
 *     summary: Welcome route
 *     description: API Documentation for Team JOPAK.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to Team JOPAK API docs
 */

router.get("/jopak", (req, res) => {
  res.json({ message: "Welcome to Team JOPAK API docs" });
});

module.exports = router;
