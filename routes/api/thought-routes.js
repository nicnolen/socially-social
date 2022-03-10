// Import dependencies
const router = require('express').Router;
const {
  getAllThought,
  getThoughtById,
  createThought,
  deleteThought,
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router.route('/').get(getAllThought).post(createThought);

// Set up GET one, PUT, DELETE at /api/thoughts/:id
router.route('/:id').get(getThoughtById).put(getThoughtById).delete(deleteThought);

// Export the module
module.exports = router;
