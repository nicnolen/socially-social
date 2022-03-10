// Import dependencies
const { User, Thought } = require('../models');

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
};

// Export the module
module.exports = thoughtController;
