// Import dependencies
const { User, Thought } = require('../models');

// Create functionality for the User model
const userController = {
  // /api/users (GET all users)
  getAllUser(req, res) {
    User.find({})
      .select('-__v') // tell Mongoose we dont want to use the pizza's `__v` field
      .sort({ _id: -1 }) // sort in DESC order by `id` value
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.error(err);
        res.sendStatus(400);
      });
  },
};

// Export the module
module.exports = userController;