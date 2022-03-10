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
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .select('-__v')
      .then(dbUserData => {
        // if no user is found
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  },

  // add a user to the database (callback function for `POST /api/users)
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  // update user by id (callback function for `PUT /api/user/:id`)
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // delete user and associated thoughts (callback function for `DELETE /api/users/:id)
  deleteUser({ params }, res) {
    Thought.deleteMany({ userId: params.id })
      .then(() => {
        User.findOneAndDelete({ userId: params.id }).then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No User found with this id' });
            return;
          }
          res.json(dbUserData);
        });
      })
      .catch(err => res.json(err));
  },

  // add a new friend (callback function for `POST /api/users/:userid/fiends/:friendId`
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },
};

// Export the module
module.exports = userController;
