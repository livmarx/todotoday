const express = require('express');
const router = express.Router();

router.use('/users', require('./userRoutes'));
router.use('/toilets', require('./toiletRoutes'));
// router.use('/allTodos', require('./todoRoutes'));

module.exports = router;
