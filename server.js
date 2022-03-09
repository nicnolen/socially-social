// Import dependencies
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(require('./routes'));

// Tell Mongoose what database we want to connect to
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socially-social'
);

// Log mongo queries being executed
mongoose.set('debug', true);

// Connect to the correct port
app.listen(PORT, () => console.info(`🌍 Connected on localhost:${PORT}`));
