// Import dependencies
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Create Reaction schema
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, // tell Mongoose to expect an ObjectId
      default: () => new Types.ObjectId(), // default value is a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal =>
        moment(createdAtVal).format('MMMM Do YYYY [at] h:mm a'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create Thought schema
const ThoughtSchema = new Schema(
  {
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
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

// Export module
module.exports = Thought;
