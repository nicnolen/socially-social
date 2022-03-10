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
    thoughts: [
      {
        type: Schema.Types.ObjectId, // tell Mongoose to expect an object id
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Created the virtual called `friendCount` to retrieve the length of the user `friends` array field
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create the User model
const User = model('User', UserSchema);

// Export the module
module.exports = User;
