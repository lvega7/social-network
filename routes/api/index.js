const router = require('express').Router();
// const commentRoutes = require('./comment-routes');
const userRoutes = require('./users-routes');
const thoughtRoutes = require('./thoughts-routes');

// router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;