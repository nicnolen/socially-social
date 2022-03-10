// Import dependencies
const router = require('express').Router;
const { getAllThought } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router.route('/').get(getAllThought);

// Export the module
module.exports = router;
