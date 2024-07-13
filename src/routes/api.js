const express = require ('express');
const router = express.Router();

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Get a resource
 *     description: Get a specific resource.
 *     responses:
 *       200:
 *         description: Successful responses
 */


router.get('/test', (req, res) => {
  res.json({ message: "Resource retrieved successfully" });
});
/**
 * @swagger
 * /api/create-users:
 *   post:
 *     summary: Create a new user
 *     description: Creates a user.
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                  
 */
router.post('/create-users', (req, res) => {
  // Implement logic to fetch all users
  res.json({message: "User created"});
});


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */
router.get('/users', (req, res) => {
  // Implement logic to fetch all users
  res.json([]);
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user
 *     description: Retrieve a specific user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Implement logic to fetch user by ID
  res.json({ id: userId, name: "John Doe", email: "john.doe@example.com", password: "hashed_password", createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z" });
});
/**
 * @swagger
 * /api/organizations:
 *   post:
 *     summary: Creates a new organisation
 *     description: Creates a new organisation.
 *     responses:
 *       200:
 *         description: Created a new organisation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 */
router.post('/create-organizations', (req, res) => {
  // Implement logic to fetch all organizations
  res.json([]);
});


/**
 * @swagger
 * /api/organizations:
 *   get:
 *     summary: Get all organizations
 *     description: Retrieve a list of all organizations.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */
router.get('/organizations', (req, res) => {
  // Implement logic to fetch all organizations
  res.json([]);
});

/**
 * @swagger
 * /api/organizations/{id}:
 *   get:
 *     summary: Get an organization
 *     description: Retrieve a specific organization by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Organization not found
 *       500:
 *         description: Internal server error
 */
router.get('/organizations/:id', (req, res) => {
  const orgId = req.params.id;
  // Implement logic to fetch organization by ID
  res.json({ id: orgId, name: "Acme Corp", description: "An example organization", createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z" });
});

/**
 * @swagger
 * /api/payments:
 *   get:
 *     summary: Get all payments
 *     description: Retrieve a list of all payments.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   organizationId:
 *                     type: string
 *                   amount:
 *                     type: number
 *                   currency:
 *                     type: string
 *                   status:
 *                     type: string
 *                   transactionId:
 *                     type: string
 *                   paymentMethod:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */
router.get('/payments', (req, res) => {
  // Implement logic to fetch all payments
  res.json([]);
});

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Get a payment
 *     description: Retrieve a specific payment by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 organizationId:
 *                   type: string
 *                 amount:
 *                   type: number
 *                 currency:
 *                   type: string
 *                 status:
 *                   type: string
 *                 transactionId:
 *                   type: string
 *                 paymentMethod:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Internal server error
 */
router.get('/payments/:id', (req, res) => {
  const paymentId = req.params.id;
  // Implement logic to fetch payment by ID
  res.json({ id: paymentId, userId: "user1", organizationId: "org1", amount: 100.00, currency: "USD", status: "completed", transactionId: "tx12345", paymentMethod: "credit_card", createdAt: "2023-01-01T00:00:00Z" });
});

/**
 * @swagger
 * /api/emails:
 *   get:
 *     summary: Get all emails
 *     description: Retrieve a list of all emails.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   templateName:
 *                     type: string
 *                   subject:
 *                     type: string
 *                   body:
 *                     type: string
 *                   status:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */
router.get('/emails', (req, res) => {
  // Implement logic to fetch all emails
  res.json([]);
});

/**
 * @swagger
 * /api/emails/{id}:
 *   get:
 *     summary: Get an email
 *     description: Retrieve a specific email by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 templateName:
 *                   type: string
 *                 subject:
 *                   type: string
 *                 body:
 *                   type: string
 *                 status:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Email not found
 *       500:
 *         description: Internal server error
 */
router.get('/emails/:id', (req, res) => {
  const emailId = req.params.id;
  // Implement logic to fetch email by ID
  res.json({ id: emailId, userId: "user1", templateName: "welcome", subject: "Welcome to our service", body: "Hello, welcome to our service!", status: "sent", createdAt: "2023-01-01T00:00:00Z" });
});

/**
 * @swagger
 * /api/notifications:
 *   get:
 *     summary: Get all notifications
 *     description: Retrieve a list of all notifications.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   type:
 *                     type: string
 *                   message:
 *                     type: string
 *                   status:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */
router.get('/notifications', (req, res) => {
  // Implement logic to fetch all notifications
  res.json([]);
});

/**
 * @swagger
 * /api/notifications/{id}:
 *   get:
 *     summary: Get a notification
 *     description: Retrieve a specific notification by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 type:
 *                   type: string
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Internal server error
 */
router.get('/notifications/:id', (req, res) => {
  const notificationId = req.params.id;
  // Implement logic to fetch notification by ID
  res.json({ id: notificationId, userId: "user1", type: "info", message: "This is a notification.", status: "read", createdAt: "2023-01-01T00:00:00Z" });
});

/**
 * @swagger
 * /api/settings:
 *   get:
 *     summary: Get all settings
 *     description: Retrieve a list of all settings.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   notificationsEnabled:
 *                     type: boolean
 *                   language:
 *                     type: string
 *                   region:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */
router.get('/settings', (req, res) => {
  // Implement logic to fetch all settings
  res.json([]);
});

/**
 * @swagger
 * /api/settings/{id}:
 *   get:
 *     summary: Get a setting
 *     description: Retrieve a specific setting by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 notificationsEnabled:
 *                   type: boolean
 *                 language:
 *                   type: string
 *                 region:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Setting not found
 *       500:
 *         description: Internal server error
 */
router.get('/settings/:id', (req, res) => {
  const settingId = req.params.id;
  // Implement logic to fetch setting by ID
  res.json({ id: settingId, userId: "user1", notificationsEnabled: true, language: "en", region: "US", createdAt: "2023-01-01T00:00:00Z" });
});


module.exports = router;
