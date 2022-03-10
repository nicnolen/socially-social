// Import dependencies
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal =>
      moment(createdAtVal).format('MMMM Do YYYY [at] h:mm a'), // Formatted as Month Day Year at hour:minute am/pm
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema]
});
