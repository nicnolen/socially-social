// Import dependencies
const router = require('express').Router;
const {
  getAllThought,
  getThoughtById,
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router.route('/').get(getAllThought);

// Set up GET one, PUT, DELETE at /api/thoughts/:id
router.route('/:id').get(getThoughtById);

// Export the module
module.exports = router;
