const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies.js');

// GET /movies/new
router.get('/new', moviesCtrl.new)

module.exports = router;
