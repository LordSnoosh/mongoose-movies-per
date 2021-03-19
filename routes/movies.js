const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies.js');

// GET /movies
router.get('/', moviesCtrl.index);
// GET /movies/new
router.get('/new', moviesCtrl.new);
// POST /movies
router.post('/', moviesCtrl.create);

module.exports = router;
