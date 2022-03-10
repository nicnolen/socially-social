// Import dependencies
const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// Set up GET all at /api/users
router.route('/').get(getAllUser).post(createUser);

// Set up GET one at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Export the router
module.exports = router;
