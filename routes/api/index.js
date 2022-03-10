// Import dependencies
const router = require('express').Router();
const userRoutes = require('./user-routes');

// Add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

// Export the module
module.exports = router;
