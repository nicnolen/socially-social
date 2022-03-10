// Import dependencies
const { User, Thought } = require('../models');
const { param } = require('../routes/api');

// Create functionality for the Thought model
const thoughtController = {
  // GET all thoughts (callback function for `GET /api/thoughts`)
  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  // GET one thought by id (callback function for `GET /api/thoughts/:id`)
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thoughts found with that id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.error(err);
        res.statusSend(400);
      });
  },

  // add a thought to the database (callback function for `POST /api/thoughts)
  createThought({ body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },
};

// Export the module
module.exports = thoughtController;
