// Import dependencies
const { Schema, model } = require('mongoose');

// Create the User schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/], // Mongoose matching validation
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
);
