// Import dependencies
const router = require('express').Router();
const { getAllUser } = require('../../controllers/user-controller');

// Set up GET all at /api/pizzas
router.route('/').get(getAllUser);

// Export the router
module.exports = router;
