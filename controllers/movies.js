const Movie = require('../models/movie');

module.exports = {
  new: newMovie,
  create
};

function create(req, res) {
  // Convert nowShowing ('on' or nothing) to true/false
  req.body.nowShowing = !!req.body.nowShowing;
  // Remove whitespace next to the commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  const movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.render('movies/new');
    console.log(movie);
    res.redirect('/movies/new');
  });
}

function newMovie(req, res) {
  res.render('movies/new');
} 