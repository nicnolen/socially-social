// Import dependencies
const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
} = require('../../controllers/user-controller');

// Set up GET, POST all at /api/users
router.route('/').get(getAllUser).post(createUser);

// Set up GET one, PUT, DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST at /:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// Export the router
module.exports = router;
