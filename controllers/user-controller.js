// Import dependencies
const { User, Thought } = require('../models');

// Create functionality for the User model
const userController = {
  // GET all users (callback function for `GET /api/users`)
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

  // get one user by id (callback function for `GET /api/users/:id)
  // destructured `params` out since thats the only data we need to fulfill the request
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .select('-__v')
      .then(dbUserData => {
        // if no user is found
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  },
};

// Export the module
module.exports = userController;
