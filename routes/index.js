// Import dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

// Add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

// Export the router
module.exports = router;
