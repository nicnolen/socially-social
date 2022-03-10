// Import dependencies
const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router.route('/').get(getAllThought).post(createThought);

// Set up GET one, PUT, DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Post at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// Delete at /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

// Export the module
module.exports = router;
